# reqres.in-API-Testing-Project-
API testing project using Postman for the reqres.in API

**What is an API?**:  
API is an acronym and it stands for Application Programming Interface. API is a set of routines, protocols, and tools for building Software Applications. APIs specify how one software program should interact with other software programs.
  
Routine: a program that performs a particular task. Routine is also known as procedure, function, or subroutine.

Protocols: A format for transmitting data between two systems.

In simple words, API stands for Application Programming Interface. API acts as an interface between two software applications and allows the two software applications to communicate with each other. API is a collection of software functions that can be executed by another software program.
  
**What is Automation Testing?**  
Automation Testing is a software testing technique that performs using special automated testing software tools to execute a test case suite. On the contrary,Manual Testing is performed by a human sitting in front of a computer carefully executing the test steps.  
The automation testing software can also enter test data into the System Under Test, compare expected and actual results and generate detailed test reports.Software Test Automation demands considerable investments of money and resources.  
Successive development cycles will require execution of same test suite repeatedly. Using a test automation tool, it’s possible to record this test suite and re-play it as required. Once the test suite is automated, no human intervention is required. This improved ROI of Test Automation. The goal of Automation is to reduce the number of test cases to be run manually and not to eliminate Manual Testing altogether.  

Let’s see some examples of an API in a more approachable way.

Assume an API as a Waiter at a Restaurant.

At a restaurant, you give an order based on the items available on the menu. A waiter in the restaurant writes down your order and delivers it to the kitchen who prepares your meal. Once the meal is ready, the waiter picks up your food from the kitchen and serves it to you at your table.

In this scenario, the waiter’s role is similar to an API. As a waiter, the API takes a request from a source, takes that request to the database, fetches the requested data from the database, and returns a response to the source.

Now let’s see another example.

If you are using a flight service engine say Expedia, where you search for flights on a specific date. Once you pass the data such as Source, Destination, Onward Date, and Return Date and click on search. Expedia sends a request to airlines through an API as per your search details. The API then takes the airline’s response to your request and delivers it right back to Expedia.


**What is API Testing?**  
API testing is a type of software testing that involves testing APIs directly and also as a part of integration testing to check whether the API meets expectations in terms of functionality, reliability, performance, and security of an application. In API Testing our main focus will be on a Business logic layer of the software architecture. API testing can be performed on any software system which contains multiple APIs. API testing won’t concentrate on the look and feel of the application. API testing is entirely different from GUI Testing.

**API Testing Types?**  
API testing typically involves the following practices:

- Unit testing: To test the functionality of individual operation
- Functional testing: To test the functionality of broader scenarios by using a block of unit test results tested together
- Load testing: To test the functionality and performance under load
- Runtime/Error Detection: To monitor an application to identify problems such as exceptions and resource leaks
- Security testing: To ensure that the implementation of the API is secure from external threats
- UI testing: It is performed as part of end-to-end integration tests to make sure every aspect of the user interface functions as expected
- Interoperability and WS Compliance testing: Interoperability and WS Compliance Testing is a type of testing that applies to SOAP APIs. Interoperability between SOAP APIs is checked by ensuring conformance to the Web Services Interoperability profiles. WS-* compliance is tested to ensure standards such as WS-Addressing, WS-Discovery, WS-Federation, WS-Policy, WS-Security, and WS-Trust are properly implemented and utilized
- Penetration testing: To find vulnerabilities of an application from attackers
- Fuzz testing: To test the API by forcibly input into the system in order to attempt a forced crash
**Common tests on APIs:**  
Some of the common tests we perform on APIs are as follows.

- To verify whether the return value is based on the input condition. The response of the APIs should be verified based on the request.
- To verify whether the system is authenticating the outcome when the API is updating any data structure
- To verify whether the API triggers some other event or request another API
- To verify the behavior of the API when there is no return value

**Advantages of API Testing:**  
- API Testing is time effective when compared to GUI Testing. API test automation requires less code so it can provide faster and better test coverage.
- API Testing helps us to reduce the testing cost. With API Testing we can find minor bugs before the GUI Testing. These minor bugs will become bigger during GUI Testing. So finding those bugs in the API Testing will be cost-effective to the Company.
- API Testing is language independent.
- API Testing is quite helpful in testing Core Functionality. We can test the APIs without a user interface. In - GUI Testing, we need to wait until the application is available to test the core functionalities.
- API Testing helps us to reduce the risks.

**What exactly needs to be verified in API Testing?**:  
Basically, on API Testing, we send a request to the API with the known data and we analyze the response.
- Data accuracy
- HTTP status codes
- Response time
- Error codes in case API return any errors
- Authorization checks
- Non-functional testing such as performance testing, security testing

**Tools used for API Testing:**:
- *Postman* Selected tool in this project
- Katalon Studio
- SoapUI
- Assertible
- Tricentis Tosca
- Apigee
- JMeter
- Rest-Assured
- Karate DSL
- API Fortress
- API Science
- APIary Inspector

**Difference between API testing and Unit Testing?**
| UNIT TESTING | API TESTING |
| ---- | ---- |
| - Unit testing is conducted by the Development Team
- Unit testing is a form of White box testing
- Unit testing is conducted prior to the process of including the code in the build
- Source code is involved in Unit testing
- In unit testing, the scope of testing is limited, so only basic functionalities are considered for testing | - API testing is conducted by QA Team
- API testing is a form of Black box testing
- API testing is conducted after the build is ready for testing
- Source code is not involved in API testing
- In API testing, the scope of testing is wide, so all the issues that are functional are considered for testing |

**What is Postman?**
Postman is a API testing tool used by more than 20 million users. It has gained a immense popularity in the IT industry among the developers and testers. The simple and user-friendly interface helps when it comes to documenting, designing, and testing APIs. You can create requests to API endpoints, send various types of data, and examine responses effortlessly with Postman. Its simple and informative graphical user interface makes it easy for even a less experienced beginner to interact with APIs without digging into complex code.
**How Beneficial is Postman for API Testing?**
- Quality assurance: API testing maintains trust and reputation by ensuring reliable performance.
- Early issue detection: Shift-left API testing finds and resolves defects promptly.
- Resource conservation: Automated API testing saves time and boosts innovation.
- Rapid iteration: API tests in CI/CD pipelines enable frequent bug-free releases.
- Efficient Test Organization: Postman’s interface supports the creation of reusable collections, enhancing test organization and sharing.
- Seamless CI Integration: Postman seamlessly integrates with leading CI tools, providing visibility into API builds alongside testing and development. 
- Machine-Readable Documentation: Postman’s machine-readable documentation fosters clear communication and comprehension of APIs for team members and stakeholders.
- Real-Time Collaboration: Postman’s version control and collaboration capabilities promote real-time sharing and teamwork, reducing development cycle durations. 
- Design and Mocking: Postman’s design and mocking features eliminate the need for initial backend server setup, expediting API development





