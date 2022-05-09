import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div>
                <h2 className='text-center text-primary'>Different Javascript And Nodejs?</h2>
                <p>JavaScript is a programming language, which runs in web browsers. Whereas Node. js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all.
                    <br />
                    <span className='fw-bold'>Javacript:</span><br />
                    Javascript is a programming language that is used for writing scripts on the website.JavaScript run only the browsers.It is basically used on the cliet side.JavaScript used front end development.
                    <br />
                    <span className='fw-bold'>Node Js:</span><br />
                    Javascript is a Scripting language. It is mostly abbreviated as JS. Nodejs is written in C, C++ and Javascript. Nodejs modules are Lodash, express etc. These modules are to be imported from npm.
                </p>
            </div>
            <div>
                <h2 className='text-center text-primary'>Different SQL And NoSQL?</h2>
                <p>
                    <span className='fw-bold'>SQL:</span><br />
                    SQL meaning structured query language.Sql database called Relationla Database Management System(RDBMS). SQL hava fixed or  static schema.This database are not suited for hierarchical data storage.And also best suited for complex query. <br />
                    <span className='fw-bold'>NoSQL:</span><br />
                    NoSql meaning non structured query language.NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. NoSql is not good for complex query. This databases are best suited for hierarchical data storage.
                </p>
            </div>
            <div>
                <h2 className='text-center text-primary'>What does the purpose jwt and how it works?</h2>
                <span className='fw-bold '>JWT :</span> <br />
                JWT meaning JSON Web Token.(JWT).JWT JSON Web Token, is an open standard used to share security information between two parties — a client and a server.
                For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers.
                a token is a string of data that represents something else, such as an identity. In the case of authentication, a non-JWT based token is a string of characters that allow the receiver to validate the sender’s identity.
                HOW WORK? ..A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization.The jwt look : xxx.yyy.zzz.
            </div>
        </div>
    );
};

export default Blogs;