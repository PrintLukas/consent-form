FROM ubuntu:latest
LABEL authors="lukaseideloth"

ENTRYPOINT ["top", "-b"]