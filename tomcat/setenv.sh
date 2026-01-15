#!/bin/sh

CATALINA_OPTS="-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -javaagent:/jmx/jmx_prometheus_javaagent.jar=9010:/jmx/tomcat-jmx.yaml -Xms512m -Xmx1024m -XX:+UseG1GC -XX:+UseContainerSupport"

