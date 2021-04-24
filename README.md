# Comments Microservice

## Prebuild
Once the project has been cloned down, you will need to run the `prebuid.sh` script to copy the `config.json` file into each project root directory. This is done because each of the microservices are using Docker and it does not have the ability to jump up to the **Comment-App** root directory. To run this file, simply run the following command on the root:

- `bash prebuild.sh` - will copy the config file to each microservice.

**Important Note:** *Once this bash script is finished, you will have the `config.json` file on each microservice root. Do not edit the config file from these folders. If you need to modify the config file, do it from the **Comment-App** root and re-run the bash script to update the microservices.*

<br>

## What Should the Microservice Do?

<br>

### **Post Service**
- create a post
- list all post


|Path  | Method | Body? | Goal |
|--|--|--|--|
| /posts | POST | { title: string } | create a new post |
|/posts|GET|N/A|get all posts|

<br>

### **Comments Service**
- create a comments
- list all comments

|Path  | Method | Body? | Goal |
|--|--|--|--|
| /posts/:id/comments | POST | { content: string } | create a comment associated with the given post id |
|/posts/:id/comments|GET|N/A|retrieve all comments associated with the given post id|
<br>

### **Query Service**
- provide list of posts
- provide list of comments

|Path  | Method | Goal |
|--|--|--|
| /posts | GET | provide list of posts and comments
| /events | POST | interpret the event object and construct data

<br>

_**Event Object...**_

|Event|
|--|
|type: **PostCreated**|
|{ id: 'a5n91oq': content: 'content..', postId: 'a71w2cb' }|

|Event|
|--|
|type: **CommentCreated**|
|{ id: 'b0oq1c0': content: 'content..', postId: 'kj1ng2x' }|