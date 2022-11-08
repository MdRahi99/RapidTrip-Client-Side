import React from "react";
import img1 from "../../Assets/Image/blog-1.png";
import img2 from "../../Assets/Image/blog-2.jpg";
import img3 from "../../Assets/Image/blog-3.png";
import img4 from "../../Assets/Image/blog-4.png";
import Title from "../../Hooks/Title";

const Blogs = () => {
  Title('Blogs');
  return (
    <div className="my-12">
      <h1 className="text-4xl text-center my-6">Blogs</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-items-center items-center bg-neutral p-8 rounded">
        <div className="card w-full h-full p-12 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={img1} alt="blog-1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title mb-3">
              Difference between SQL and NoSQL
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <h3 className="text-2xl mb-3">SQL</h3>
                <ul>
                  <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</li>
                  <li>
                    These databases have fixed or static or predefined schema
                  </li>
                  <li>Follows ACID property</li>
                  <li>
                    Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl mb-3">NoSQL</h3>
                <ul>
                  <li>Non-relational or distributed database system.</li>
                  <li>They have dynamic schema</li>
                  <li>
                    Follows CAP(consistency, availability, partition tolerance)
                  </li>
                  <li>
                    Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-full h-full p-12 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={img2} alt="blog-2" />
          </figure>
          <div className="card-body">
            <h2 className="card-title mb-3">
              What is JWT, and how does it work?
            </h2>
            <p>
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued. <br />
              JWTs differ from other web tokens in that they contain a set of
              claims. Claims are used to transmit information between two
              parties. What these claims are depends on the use case at hand.
              For example, a claim may assert who issued the token, how long it
              is valid for, or what permissions the client has been granted.
            </p>
          </div>
        </div>

        <div className="card w-full h-full p-12 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={img3} alt="blog-3" />
          </figure>
          <div className="card-body">
            <h2 className="card-title mb-3">
              What is the difference between javascript and NodeJS?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <h2 className="text-2xl mb-3">JavaScript</h2>
                <p>
                  Javascript is a Scripting language. It is mostly abbreviated
                  as JS. It can be said that Javascript is the updated version
                  of the ECMA script. Javascript is a high-level programming
                  language that uses the concept of Oops but it is based on
                  prototype inheritance.{" "}
                </p>
              </div>
              <div>
                <h2 className="text-2xl mb-3">NodeJS</h2>
                <p>
                  NodeJS is a cross-platform and opensource Javascript runtime
                  environment that allows the javascript to be run on the
                  server-side. Nodejs allows Javascript code to run outside the
                  browser. Nodejs comes with a lot of modules and mostly used in
                  web development.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-full h-full p-12 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={img4} alt="blog-4" />
          </figure>
          <div className="card-body">
            <h2 className="card-title mb-3">
              How does NodeJS handle multiple requests at the same time?
            </h2>
            <p>
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. <br />
              If NodeJS can process the request without I/O blocking then the
              event loop would itself process the request and sends the response
              back to the client by itself. But, it is possible to process
              multiple requests parallelly using the NodeJS cluster module or
              worker_threads module.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
