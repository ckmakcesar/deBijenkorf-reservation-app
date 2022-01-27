BASEDIR=$(dirname $0)
SCRIPT_PARENTDIR=$(cd ${BASEDIR}/../ && pwd)

docker run --name reservations-db -d -p 15432:5432 --volume ${SCRIPT_PARENTDIR}/sql:/sql -e POSTGRES_HOST_AUTH_METHOD=trust postgres
