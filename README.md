# Smile Today

To deploy run `./deploy.sh username host port`

## develop server

setting enviroment variables `.zshrc`

```
export FLASK_ENV=development
export FLASK_APP=server/cosmile
```

1. Activate the environment
   `$ . venv/bin/activate`
2. run the server
   `$ flask run`

## develop remote MySQL server

> [remotemysql](https://remotemysql.com/)

## Blog Article Table

```sql
CREATE TABLE blog_articles(
   `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
   `title` VARCHAR(100) NOT NULL,
   `link` VARCHAR(256) NOT NULL,
   `tag` VARCHAR(50) NOT NULL,
   `content` VARCHAR(256) NOT NULL,
   `createTime` TIMESTAMP NOT NULL,
   `updateTime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   `deleted` TINYINT(1) NOT NULL DEFAULT 0
)
```

## get bilibili history and save to MySQL

```shell
export bilibili_cookie="your cookie" # SESSDATA=value
export DB_user="your DB user"
export DB_password="your DB password"
export DB_host="your DB host"
export DB_database="your DB database"
# setting a Schedule Tasks to run every day at 12:01 PM
crontab "1 12 * * *" ./schedule_get_bilibili_history.sh
# show the schedule tasks
crontab -l
# show the current time
date
```
