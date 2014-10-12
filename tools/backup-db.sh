#!/bin/bash

source /etc/sites/skp/backup.conf

echo "Configured limits :"
echo " Maximum size in bytes : $MAX_SIZE_B"
echo " Maximum number of files : $MAX_NUM_FILES"

NEO_SIZE_H=`du -hs $NEO_PATH | cut -f1`
NEO_SIZE_B=`du -bs $NEO_PATH | cut -f1`
echo "Database size : $NEO_SIZE_H ($NEO_SIZE_B bytes)"

NEO_NUM_FILES=`find $NEO_PATH | wc -l`
echo "Number of files to backup : $NEO_NUM_FILES" 

if (($NEO_SIZE_B < MAX_SIZE_B && $NEO_NUM_FILES < MAX_NUM_FILES)); then
	echo "Go on with the backup"

	BACKUP_DIR_DATED="$BACKUP_DIR/"`date +%Y-%m-%d-%H-%M-%S`
	echo "Database directory : $NEO_PATH"
	echo "Backing up to : $BACKUP_DIR_DATED"

	$NEO_BIN status
	NEO_PID=`lsof -i :7474 -t`
	
	#Stop Neo4J
	START_TIME=`date +%s`
	$NEO_BIN stop
	END_TIME=`date +%s`
	DURATION_STOP=$(($END_TIME-$START_TIME))
	echo -e "Neo4J stopped in $DURATION_STOP seconds\n"

	NEO_RUNNING=`ps -p $NEO_PID h | grep neo4j | wc -l`
	[[ $NEO_RUNNING -eq 1 ]] && echo "ERROR! Neo4J is still running!" && sendemail -f "i@dariospagnolo.org" $EMAIL_RECIPIENTS -u "[SKP] Neo4J backup ALERT" -m "Neo4J still running, backup might be corrupted" $EMAIL_SERVER

	#Copy the database
	START_TIME=`date +%s`
	cp -r $NEO_PATH $BACKUP_DIR_DATED
	END_TIME=`date +%s`
	DURATION_COPY=$(($END_TIME-$START_TIME))
	echo -e "Copy in $DURATION_COPY seconds\n"

	#Restart Neo4J
	START_TIME=`date +%s`
	$NEO_BIN start
	END_TIME=`date +%s`
	DURATION_RESTART=$(($END_TIME-$START_TIME))
	echo -e "Restart Neo4J in $DURATION_RESTART seconds\n"

	DURATION_TOTAL=$(($DURATION_STOP+$DURATION_COPY+DURATION_RESTART))
	echo "Total downtime : $DURATION_TOTAL seconds"

	$NEO_BIN status
	NEO_PID=`lsof -i :7474 -t`
	NEO_RUNNING=`ps -p $NEO_PID h | grep neo4j | wc -l`
	[[ $NEO_RUNNING -eq 0 ]] && echo "ERROR! Neo4J was not restart!" && sendemail -f "i@dariospagnolo.org" $EMAIL_RECIPIENTS -u "[SKP] Neo4J backup HUGE ALERT" -m "Neo4J was NOT restarted after backup : SKP is DOWN" $EMAIL_SERVER

	sendemail -f "i@dariospagnolo.org" $EMAIL_RECIPIENTS -u "[SKP] Neo4J backup report" -m "Total duration : $DURATION_TOTAL seconds ($DURATION_STOP + $DURATION_COPY + $DURATION_RESTART)\nNumber of files : $NEO_NUM_FILES\nFile size : $NEO_SIZE_H\nDestination directory : $BACKUP_DIR_DATED\nNeo4J PID : $NEO_PID" $EMAIL_SERVER
else
	echo "Too much data, will take to long!"
	#TODO
	#Notify admin
fi