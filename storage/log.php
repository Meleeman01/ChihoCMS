<?php



class Logger
{
    private $logger;

    public function __construct()
    {
        $this->logger = $logger;
    }

    public function log($dataToLog = '')
    {
        if (empty($dataToLog)) {
            error_log($dataToLog);
        }
        else {
            $type = gettype($dataToLog);
            error_log($type);
            if ($type == 'object') {
                error_log(json_decode($dataToLog));
            }
            else if ($type == 'array') {
                error_log(json_encode($dataToLog));
            }
            else {
                error_log($dataToLog);
            }
            
            
        }
        // if ($this->logger) {
        //     $this->logger->info('Doing work');
        // }
           
        // try {
        //     $this->doSomethingElse();
        // } catch (Exception $exception) {
        //     $this->logger->error('Oh no!', array('exception' => $exception));
        // }

        // do something useful
    }
}