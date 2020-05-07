#!/bin/bash

PROJECT=$1
BRANCH=$2
BUILD_FOLDER=$3
PROJECT_ZIP=${PROJECT_ZIP:-project.zip}
PROTOTYPES_API_TOKEN=${PROTOTYPES_API_TOKEN}

PROTOTYPES_API_HOST="app.mono.digital"
PROTOTYPES_API_DOMAIN="${PROTOTYPES_API_HOST}/api"
PASSWD_FILE="proto-htpasswd"

argc=$#

# Make sure the number of arguments match
if [[ argc -lt 3 ]]; then
    echo Wrong parameters count
    echo Usage: $0 project-name branch-name dist-folder-name
    exit 1
fi

# Check if the given dist directory name exists
if [[ ! -d ${BUILD_FOLDER} ]]; then
    echo Directory "${BUILD_FOLDER}" was not found
    exit 1
fi

# Check if there is an API token registered as ENV VARIABLE
if [ "${PROTOTYPES_API_TOKEN}" = "" ]; then
    echo You have to provide an \$PROTOTYPES_API_TOKEN env variable
    exit 1;
fi

# Try the token agains the API to see if it is valid
if [ ! ` curl --fail -s -H "Authorization: Bearer ${PROTOTYPES_API_TOKEN}" ${PROTOTYPES_API_DOMAIN} ` ]; then
    echo Your token is not valid or has expired
    exit 1
else
    echo Token valid
fi

# Compacts files in the given folder
function fzip {
    echo Compacting files under ${BUILD_FOLDER} into ${PROJECT_ZIP} archive

    if [[ -f "${PASSWD_FILE}" ]]; then
        echo Found a "${PASSWD_FILE}" file, copying it to your build folder.
        cp "./${PASSWD_FILE}" "${BUILD_FOLDER}/"
    else
        echo No "${PASSWD_FILE}" file found.
    fi

    cd ${BUILD_FOLDER} && zip -r ../${PROJECT_ZIP} * && cd ..

    echo Done!
}

# Uploads the zipped file to the API so it can publish the new website
function send {
    echo Uploading the zip file to the prototypes application...
    UPLOAD=$(curl -s -XPOST --fail -F "archive=@./${PROJECT_ZIP}" -F "branch=${BRANCH}" -F "project=${PROJECT}" -H "Authorization: Bearer ${PROTOTYPES_API_TOKEN}" "http://${PROTOTYPES_API_DOMAIN}/projects")

    if [ ! "$UPLOAD" == "FAILED" ]; then
        echo Upload sent successfully
        echo You should see your prototype live at: "$UPLOAD"
    else
        echo "Sending the request failed for some reason"
        exit 1
    fi

    rm -rf "${PROJECT_ZIP}"
}

fzip
send
