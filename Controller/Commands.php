<?php

    namespace Controller;

    use Config\Config;

    class Commands {

        public function helpAction() {
            Console::listCommands();
        }

        public function backupDatabaseAction() {
            echo "Old Bash script. Call " . Config::BASE_PATH . "tools/backup-db.sh";
        }

        public function getNewStringsAction($params = null) {
            $params = Console::getParams($params);
            $lang = $params[0];

            if (!Commands::languageExists($lang)) die("Specified language ($lang) doesn't exist.");

            $gettext_dir = Commands::checkGettextDirectory();

            $cmd = "find . -iname \"*.php\" | xgettext -f - --language=php -c --from-code=utf-8 -o - -i --no-wrap > $gettext_dir/all-strings.txt";
            echo shell_exec($cmd);

            $l10nDir = Commands::getL10nDir($lang);
            $cmd = "msgmerge --no-fuzzy -v -i --no-wrap $l10nDir/messages-$lang-translated.txt $gettext_dir/all-strings.txt | msgattrib -i --no-wrap --untranslated";
            echo shell_exec($cmd);
            
        }

        private function checkGettextDirectory() {
            $gettext_dir = Config::BASE_PATH . Config::GETTEXT_DIRECTORY;
            if (!is_dir($gettext_dir)) {
                mkdir($gettext_dir);
            }

            if (is_dir($gettext_dir)) return $gettext_dir;
            else die("Gettext directory could not be created");
        }

        private function getL10nDir($language) {
            $languageCodes = new \Model\LanguageCode();

            return Config::BASE_PATH . "l10n/" . $languageCodes->getAllCodes()[$language]["isoCode"] . "/LC_MESSAGES";
        }

        private function languageExists($language) {
            $languageCodes = new \Model\LanguageCode();

            if (array_key_exists($language, $languageCodes->getAllCodes())) return true;
            else return false;
        }

        public function generateCrossbarConfigAction() {

            $configPath = Config::BASE_PATH . "crossbar/.crossbar/config.json";

            $config = file_get_contents($configPath . ".template");

            $config = str_replace("%%%WS_PORT%%%", Config::CROSSBAR_WS_PORT, $config);
            $config = str_replace("%%%REDIRECT_URL%%%", Config::CROSSBAR_REDIRECT_URL, $config);
            $config = str_replace("%%%WS_URL%%%", Config::CROSSBAR_WS_URL, $config);

            file_put_contents($configPath, $config);

            if (file_exists($configPath)) {
                echo "Written config file : ";
                echoC("$configPath", "green");
                echo "\nYou can start crossbar with \"crossbar start\"";
            }else {
                echoC("Config file $configPath could not be written.", "red");
            }
        }

    }