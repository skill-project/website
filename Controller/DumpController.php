<?php
    
    namespace Controller;

    use \Model\SkillManager;

    class DumpController extends Controller {
        
        public function generateDumpAction(){

            header('Content-Type: application/csv');
            header('Content-Disposition: attachment; filename=skill-project-dump.csv');
            header('Pragma: no-cache');

            $skillManager = new SkillManager();
            $data = $skillManager->findAllForDump();

            $out = fopen('php://output', 'w');
            fputcsv($out, array_keys($data[0]), ';');
            foreach($data as $row){
                fputcsv($out, $row, ';');
            }

            fclose($out);
        }

    }