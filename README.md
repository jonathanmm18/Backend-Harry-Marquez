# **Backend Engineer - Harry Márquez Muñoz**

Please try each question and go as far as you can, we&#39;re more interested in how you think than getting a complete solution.

## Challenges

### Part 1: SQL

You&#39;ve been asked to write some SQL queries to report on data in a typical relational database (for example, Postgres). Write statements to answer each of the following questions. See the **Tables** section below for CREATE statements describing the schema of each table. Please provide seed data and include instructions on seeding the database in your Readme.

1. Who are the first 10 authors ordered by date\_of\_birth?

select \* from authors order by date\_of\_birth asc limit 10;

2. What is the sales total for the author named &quot;Lorelai Gilmore&quot;?

select sum( si.item\_price \* si.quantity) as total from sale\_items si

inner join books b on si.book\_id = b.id

inner join authors a on b.author\_id = a.id

where a.name like &#39;%Lorelai Gilmore%&#39;

group by a.id ;

3. What are the top 10 performing authors, ranked by sales revenue?

select count(a.id) as mostRanked, a.name from sale\_items si

inner join books b on si.book\_id = b.id

inner join authors a on b.author\_id = a.id

group by a.id

order by count(a.id) desc

limit 10;

##### **Tables**

(Note that these statements are intended for use with Postgres -- if you choose a different database you may have to update them accordingly!)

CREATE TABLE authors (

id serial PRIMARY KEY,

name text,

date\_of\_birth timestamp

);

CREATE TABLE books (

id serial PRIMARY KEY,

author\_id integer REFERENCES authors (id),

isbn text,

);

CREATE TABLE sale\_items (

id serial PRIMARY KEY,

book\_id integer REFERENCES books (id),

customer\_name text,

item\_price money,

quantity integer

);

### Part 2: Basic API Endpoint

You&#39;ve been asked to write a simple API endpoint that optionally accepts a count and returns a JSON response using the query from part one question three (top 10 performing authors). We use NodeJS, but please use a language of your choice such as NodeJS, python, or Go.

The endpoint itself should be a GET operation that takes a query parameter called count. You are free to choose any URL or route name you wish.

If a call to the endpoint is invalid the API should return an error with an HTTP status code indicating what went wrong. IF no count is provided, the default count should be 10 results.

### Part 3: API Performance

Please refactor your endpoint code from part 2A for performance, perhaps adding a caching layer or messaging queue.

### Part 4: Build Docker Container and steps to deploy

You&#39;ve been asked to containerize and deploy this API to GCP Kubernetes Engine. Please attach the Dockerfile and provide a written step-by-step guide on how you would build the docker image and deploy this to Kubernetes or AWS ECS.

## Submission Steps:

- Create Public Github Repository
- Name your repository **Ravn-Challenge-Backend-[your name]**
- Commit early and often with clear comments
- Submit completed repository link in a response to the email you received with this challenge.