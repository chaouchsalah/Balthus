# Fill S3

This is a cron job that runs every night at midnight and it uploads all the files in mock-data folder and uploads even the updated files and override the old ones

To start it, you need first to copy .env.example into .env and put the right values in it and then:
```shell
yarn install
yarn start
```
