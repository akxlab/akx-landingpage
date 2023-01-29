#!/usr/bin/env bash
export PGSQL_PATH=/usr/local/Cellar/postgresql@14/14.6_1/bin/

$PGSQL_PATH/createUser -U postgres -h localhost -l -e -d -P akx_admin
$PGSQL_PATH/createdb -h localhost -p 5432 -E UTF8 -O akx_admin akx_data

