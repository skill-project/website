#!/bin/bash

NEO_BIN=/opt/neo4j/bin/neo4j
NEO_PATH=/opt/neo4j/data/graph.db

BACKUP_DIR=/home/spada/sites/skp/extra/neo4j-backups

MAX_SIZE_B=100000000
MAX_NUM_FILES=500

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
	
	#Stop Neo4J
	START_TIME=`date +%s`
	$NEO_BIN stop
	END_TIME=`date +%s`
	DURATION_STOP=$(($END_TIME-$START_TIME))
	echo -e "Neo4J stopped in $DURATION_STOP seconds\n"

	#Copy the database
	START_TIME=`date +%s`
	cp -r $NEO_PATH $BACKUP_DIR
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
else
	echo "Too much data, will take to long !"
	#TODO
	#Notify admin
fi