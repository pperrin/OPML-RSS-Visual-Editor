<?php
error_reporting(E_ALL);
ini_set('display_errors',1);

$xsl = new DOMDocument();
$xsl->load("transform.xsl");
$inputdom = new DomDocument();
$inputdom->load("input2.xml");

$proc = new XSLTProcessor();
$xsl = $proc->importStylesheet($xsl);
$proc->setParameter(null, "", "");

$newdom = $proc->transformToDoc($inputdom);
print $newdom-> saveXML();

?>