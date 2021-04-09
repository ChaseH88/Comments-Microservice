# Comments Microservice


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