{
  "collection": {
    "_": {
      "postman_id": "a29aaf11-3150-403b-bf00-ffd60be59b92",
      "exporter_id": "33585477"
    },
    "item": [
      {
        "id": "f3f0b511-3714-4193-b624-496732216e5c",
        "name": "LIST USERS",
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "users"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [
              {
                "key": "page",
                "value": "1"
              }
            ],
            "variable": []
          },
          "method": "GET"
        },
        "response": [],
        "event": [
          {
            "listen": "test",
            "script": {
              "id": "fd6bcc9b-f93d-4b9c-aa09-d684b2aeadb9",
              "type": "text/javascript",
              "packages": {},
              "exec": [
                "pm.test(\"Status code is 200\", function () {\r",
                "    pm.response.to.have.status(200);\r",
                "});\r",
                "pm.test(\"Response time for Reqres users is less than 1000ms\", function () {\r",
                "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                "});\r",
                "pm.test(\"verify page\", function () {\r",
                "    var jsonData = pm.response.json();\r",
                "    pm.expect(jsonData.page).to.eql(1);\r",
                "});\r",
                "pm.test(\"total_pages is 2\", function () {\r",
                "    var jsonData = pm.response.json();\r",
                "    pm.expect(jsonData.total_pages).to.eql(2);\r",
                "});\r",
                "pm.test(\"Response has expected structure\", function () {\r",
                "    var jsonData = pm.response.json();\r",
                "    pm.expect(jsonData).to.have.property('page');\r",
                "    pm.expect(jsonData).to.have.property('per_page');\r",
                "    pm.expect(jsonData).to.have.property('total');\r",
                "    pm.expect(jsonData).to.have.property('total_pages');\r",
                "    pm.expect(jsonData).to.have.property('data');\r",
                "    pm.expect(jsonData).to.have.property('support');\r",
                "});\r",
                "pm.test(\"per_page is 6\", function () {\r",
                "    var jsonData = pm.response.json();\r",
                "    pm.expect(jsonData.per_page).to.eql(6);\r",
                "});\r",
                "\r",
                "\r",
                "\r",
                ""
              ],
              "_lastExecutionId": "61b4621b-68cd-4a33-945d-31c1a9907584"
            }
          }
        ]
      },
      {
        "id": "47861294-8fb8-4753-81a7-16d78cbf8fd0",
        "name": "SINGLE USER",
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "users"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [
              {
                "key": "id",
                "value": "2"
              }
            ],
            "variable": []
          },
          "method": "GET"
        },
        "response": [],
        "event": [
          {
            "listen": "test",
            "script": {
              "id": "90e469b8-af22-4905-a351-3e563c172ea5",
              "type": "text/javascript",
              "packages": {},
              "exec": [
                "pm.test(\"Status code is 200\", function () {\r",
                "    pm.response.to.have.status(200);\r",
                "});\r",
                "pm.test(\"Response time for Reqres user only is less than 1000ms\", function () {\r",
                "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                "});\r",
                "pm.test(\"Response has expected structure\", function () {\r",
                "    var jsonData = pm.response.json();\r",
                "    \r",
                "    pm.expect(jsonData).to.have.property('data');\r",
                "    pm.expect(jsonData.data).to.have.property('id', 2);\r",
                "    pm.expect(jsonData.data).to.have.property('email', 'janet.weaver@reqres.in');\r",
                "    pm.expect(jsonData.data).to.have.property('first_name', 'Janet');\r",
                "    pm.expect(jsonData.data).to.have.property('last_name', 'Weaver');\r",
                "    pm.expect(jsonData.data).to.have.property('avatar', 'https://reqres.in/img/faces/2-image.jpg');\r",
                "    \r",
                "    pm.expect(jsonData).to.have.property('support');\r",
                "    pm.expect(jsonData.support).to.have.property('url', 'https://reqres.in/#support-heading');\r",
                "    pm.expect(jsonData.support).to.have.property('text', 'To keep ReqRes free, contributions towards server costs are appreciated!');\r",
                "});"
              ],
              "_lastExecutionId": "cb6be407-d0a8-4eff-8101-1695605c0de3"
            }
          }
        ]
      },
      {
        "id": "49ef0d6f-fc19-45fc-9a4d-662b45eb07be",
        "name": "SINGLE USER NOT FOUND",
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "users",
              "23"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "method": "GET"
        },
        "response": [],
        "event": [
          {
            "listen": "test",
            "script": {
              "id": "fb2d0961-4e89-4b12-b715-68f94644a695",
              "type": "text/javascript",
              "packages": {},
              "exec": [
                "pm.test(\"Status code is 404\", function () {\r",
                "    pm.response.to.have.status(404);\r",
                "});\r",
                "pm.test(\"Response time for Reqres users NOT FOUND is less than 1000ms\", function () {\r",
                "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                "});\r",
                "pm.test(\"Data empty\", function () {\r",
                "    var jsonData = pm.response.json();\r",
                "    pm.expect(jsonData).to.empty;\r",
                "});\r",
                "pm.test(\"Response is empty\", function () {\r",
                "    pm.expect(pm.response.text()).to.eql('{}');\r",
                "});\r",
                ""
              ],
              "_lastExecutionId": "d9bc92df-df40-495e-9744-1ccb32aa51f4"
            }
          }
        ]
      },
      {
        "id": "c5ba5e5b-c7d9-45d4-85ac-2af37226391f",
        "name": "LIST <RESOURCE>",
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "unknown"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "method": "GET"
        },
        "response": [],
        "event": [
          {
            "listen": "test",
            "script": {
              "id": "be98ab1b-ed88-4b07-9134-c806a1d76aec",
              "type": "text/javascript",
              "packages": {},
              "exec": [
                "pm.test(\"Status code is 200\", function () {\r",
                "    pm.response.to.have.status(200);\r",
                "});\r",
                "pm.test(\"Response time for unknown lists reqres is less than 1000ms\", function () {\r",
                "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                "});\r",
                "pm.test(\"verify total_pages\", function () {\r",
                "    var jsonData = pm.response.json();\r",
                "    pm.expect(jsonData.total_pages).to.eql(2);\r",
                "})\r",
                "pm.test(\"Response structure is correct\", function () {\r",
                "    var jsonData = pm.response.json();\r",
                "    \r",
                "    pm.expect(jsonData).to.have.property('page');\r",
                "    pm.expect(jsonData).to.have.property('per_page');\r",
                "    pm.expect(jsonData).to.have.property('total');\r",
                "    pm.expect(jsonData).to.have.property('total_pages');\r",
                "    pm.expect(jsonData).to.have.property('data');\r",
                "    pm.expect(jsonData).to.have.property('support');\r",
                "    \r",
                "    pm.expect(jsonData.data).to.be.an('array');\r",
                "    pm.expect(jsonData.data.length).to.eql(6);\r",
                "    \r",
                "    jsonData.data.forEach(function(item, index) {\r",
                "        pm.expect(item).to.have.property('id');\r",
                "        pm.expect(item).to.have.property('name');\r",
                "        pm.expect(item).to.have.property('year');\r",
                "        pm.expect(item).to.have.property('color');\r",
                "        pm.expect(item).to.have.property('pantone_value');\r",
                "    });\r",
                "    \r",
                "    pm.expect(jsonData.support).to.have.property('url');\r",
                "    pm.expect(jsonData.support).to.have.property('text');\r",
                "});\r",
                "pm.test(\"Content-Type is present\", function () {\r",
                "    pm.response.to.have.header(\"Content-Type\");\r",
                "});\r",
                ""
              ],
              "_lastExecutionId": "b69e60ff-766f-46ae-8c07-2c79d02c186d"
            }
          }
        ]
      },
      {
        "id": "7cb0f3dd-6a60-4b04-bea3-8b25fe1fdea5",
        "name": "SINGLE <RESOURCE>",
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "unknown",
              "2"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "method": "GET"
        },
        "response": [],
        "event": [
          {
            "listen": "test",
            "script": {
              "id": "ecafc8ed-bd43-4baa-b2d8-856269307999",
              "type": "text/javascript",
              "packages": {},
              "exec": [
                "pm.test(\"Status code is 200\", function () {\r",
                "    pm.response.to.have.status(200);\r",
                "});\r",
                "pm.test(\"Response time for unknown single reqres is less than 1000ms\", function () {\r",
                "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                "});"
              ],
              "_lastExecutionId": "36884452-54db-4f8f-92ca-47ba7aa3a558"
            }
          }
        ]
      },
      {
        "id": "1a765057-90e7-4a52-8134-eeb5ed32e848",
        "name": "SINGLE <RESOURCE> NOT FOUND",
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "unknown",
              "23"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "method": "GET"
        },
        "response": [],
        "event": [
          {
            "listen": "test",
            "script": {
              "id": "017543b6-2eb1-45e8-8f62-52bd59708b36",
              "type": "text/javascript",
              "packages": {},
              "exec": [
                "pm.test(\"Status code is 404\", function () {\r",
                "    pm.response.to.have.status(404);\r",
                "});\r",
                "pm.test(\"Response time for Reqres resource NOT FOUND is less than 1000ms\", function () {\r",
                "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                "});\r",
                "pm.test(\"Data empty\", function () {\r",
                "    var jsonData = pm.response.json();\r",
                "    pm.expect(jsonData).to.empty;\r",
                "});\r",
                "pm.test(\"Response is empty\", function () {\r",
                "    pm.expect(pm.response.text()).to.eql('{}');\r",
                "});"
              ],
              "_lastExecutionId": "b0cd5935-387b-4a38-9875-c3f6cd1e6115"
            }
          }
        ]
      },
      {
        "id": "f0657b10-3978-4d0d-b16b-bc02c43c5a1a",
        "name": "CREATE",
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "users"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "method": "POST",
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"name\": \"Tahani\",\r\n    \"job\": \"Engineer\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          }
        },
        "response": [],
        "event": [
          {
            "listen": "test",
            "script": {
              "id": "ee1f3dff-596d-410d-b6da-e34e98466130",
              "type": "text/javascript",
              "packages": {},
              "exec": [
                "pm.test(\"Status code is 201\", function () {\r",
                "    pm.response.to.have.status(201);\r",
                "});\r",
                "pm.test(\"Response time for create users is less than 1000ms\", function () {\r",
                "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                "});\r",
                "pm.test(\"Successful POST request\", function () {\r",
                "    pm.expect(pm.response.code).to.be.oneOf([201, 202]);\r",
                "});"
              ],
              "_lastExecutionId": "b0315e8a-060f-4cec-81cc-6eb9c4095088"
            }
          }
        ]
      },
      {
        "id": "601d8321-05c6-4869-ac9b-65793a02fd1d",
        "name": "UPDATE with PUT",
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "users",
              "2"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "method": "PUT",
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"name\": \"morpheus\",\r\n    \"job\": \"zion resident\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          }
        },
        "response": [],
        "event": [
          {
            "listen": "test",
            "script": {
              "id": "84ec054b-3d7b-430c-a2a4-9614ac9e2287",
              "type": "text/javascript",
              "packages": {},
              "exec": [
                "pm.test(\"Status code is 200\", function () {\r",
                "    pm.response.to.have.status(200);\r",
                "});\r",
                "pm.test(\"Response time for put update users is less than 1000ms\", function () {\r",
                "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                "});\r",
                "pm.test(\"Response structure is correct\", function () {\r",
                "    var jsonData = pm.response.json();\r",
                "    \r",
                "    pm.expect(jsonData).to.have.property('name');\r",
                "    pm.expect(jsonData).to.have.property('job');\r",
                "    pm.expect(jsonData).to.have.property('updatedAt');   \r",
                "});"
              ],
              "_lastExecutionId": "22a1ccf8-8456-4ad2-8da7-08a1da895022"
            }
          }
        ]
      },
      {
        "id": "4fa82749-d771-4854-9ad1-d5468f017971",
        "name": "UPDATE with PATCH",
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "users",
              "2"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "method": "PATCH",
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"name\": \"morpheus\",\r\n    \"job\": \"zion resident\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          }
        },
        "response": [],
        "event": [
          {
            "listen": "test",
            "script": {
              "id": "868206ce-2c80-473d-a756-05818015f749",
              "type": "text/javascript",
              "packages": {},
              "exec": [
                "pm.test(\"Status code is 200\", function () {\r",
                "    pm.response.to.have.status(200);\r",
                "});\r",
                "pm.test(\"Response time for patch user is less than 1000ms\", function () {\r",
                "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                "});"
              ],
              "_lastExecutionId": "59158a54-085b-43da-82c7-2320270b8132"
            }
          }
        ]
      },
      {
        "id": "8966946a-b7f5-4658-91af-2174033e9fe8",
        "name": "DELETE",
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "users",
              "2"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "method": "DELETE"
        },
        "response": [],
        "event": [
          {
            "listen": "test",
            "script": {
              "id": "11aeb5a0-86fc-4d33-a4c8-d0a42ee8cfab",
              "type": "text/javascript",
              "packages": {},
              "exec": [
                "pm.test(\"Status code is 204\", function () {\r",
                "    pm.response.to.have.status(204);\r",
                "});\r",
                "pm.test(\"Response time for DELETE USER is less than 1000ms\", function () {\r",
                "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                "});\r",
                "pm.test(\"Response body is empty\", function () {\r",
                "    pm.expect(pm.response.text()).to.eql('');\r",
                "});\r",
                ""
              ],
              "_lastExecutionId": "94f412f2-ad1c-4970-88bb-a177b403bfbc"
            }
          }
        ]
      },
      {
        "id": "84aeddc2-0943-4495-8aca-3a551d985cec",
        "name": "REGISTER - SUCCESSFUL",
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "register"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "method": "POST",
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"email\": \"eve.holt@reqres.in\",\r\n    \"password\": \"pistol\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          }
        },
        "response": [],
        "event": [
          {
            "listen": "test",
            "script": {
              "id": "171e83fc-18a7-43b5-a206-16e8bff6ce68",
              "type": "text/javascript",
              "packages": {},
              "exec": [
                "pm.test(\"Status code is 200\", function () {\r",
                "    pm.response.to.have.status(200);\r",
                "});\r",
                "pm.test(\"Response time for REGISTER - SUCCESSFUL is less than 1000ms\", function () {\r",
                "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                "});\r",
                "pm.test(\"token register\", function () {\r",
                "    var jsonData = pm.response.json();\r",
                "    pm.expect(jsonData.token).to.eql(\"QpwL5tke4Pnpja7X4\");\r",
                "});"
              ],
              "_lastExecutionId": "d2bc04ee-9c1e-4ed2-9c90-e46e451762ea"
            }
          }
        ]
      },
      {
        "id": "5b633d98-f03c-4727-bebe-856ac96cdaa4",
        "name": "REGISTER - UNSUCCESSFUL",
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "register"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "method": "POST",
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"email\": \"sydney@fife\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          }
        },
        "response": [],
        "event": [
          {
            "listen": "test",
            "script": {
              "id": "40a93c41-333c-4291-a9b4-80d718a583b9",
              "type": "text/javascript",
              "packages": {},
              "exec": [
                "pm.test(\"Status code is 400\", function () {\r",
                "    pm.response.to.have.status(400);\r",
                "});\r",
                "pm.test(\"Response time for REGISTER - UNSUCCESSFUL is less than 1000ms\", function () {\r",
                "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                "});\r",
                "pm.test(\"Response contains expected error message\", function () {\r",
                "    var jsonData = pm.response.json();\r",
                "    \r",
                "    pm.expect(jsonData).to.have.property('error');\r",
                "    pm.expect(jsonData.error).to.eql('Missing password');\r",
                "});\r",
                ""
              ],
              "_lastExecutionId": "3668faf0-0d85-4120-8041-85922f04e647"
            }
          }
        ]
      },
      {
        "id": "aaf2e5b1-17ea-4553-8961-b29294876834",
        "name": "LOGIN - SUCCESSFUL",
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "login"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "method": "POST",
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"email\": \"eve.holt@reqres.in\",\r\n    \"password\": \"cityslicka\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          }
        },
        "response": [],
        "event": [
          {
            "listen": "test",
            "script": {
              "id": "d011c17a-578d-4b4b-b156-02d94057eb86",
              "type": "text/javascript",
              "packages": {},
              "exec": [
                "pm.test(\"Status code is 200\", function () {\r",
                "    pm.response.to.have.status(200);\r",
                "});\r",
                "pm.test(\"Response time for LOGIN - SUCCESSFUL is less than 1000ms\", function () {\r",
                "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                "});\r",
                "pm.test(\"token login\", function () {\r",
                "    var jsonData = pm.response.json();\r",
                "    pm.expect(jsonData.token).to.eql(\"QpwL5tke4Pnpja7X4\");\r",
                "});"
              ],
              "_lastExecutionId": "d0c98044-ea28-416c-b795-ccd3fa6b1395"
            }
          }
        ]
      },
      {
        "id": "4d07ff0f-abc5-4d4f-a31a-9530a824175a",
        "name": "LOGIN - UNSUCCESSFUL",
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "login"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "method": "POST",
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"email\": \"peter@klaven\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          }
        },
        "response": [],
        "event": [
          {
            "listen": "test",
            "script": {
              "id": "e6eaa34f-26c6-4142-aa5b-a9655a64c46e",
              "type": "text/javascript",
              "packages": {},
              "exec": [
                "pm.test(\"Status code is 400\", function () {\r",
                "    pm.response.to.have.status(400);\r",
                "});\r",
                "pm.test(\"Response time for LOGIN - UNSUCCESSFUL is less than 1000ms\", function () {\r",
                "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                "});\r",
                "pm.test(\"Response contains expected error message\", function () {\r",
                "    var jsonData = pm.response.json();\r",
                "    \r",
                "    pm.expect(jsonData).to.have.property('error');\r",
                "    pm.expect(jsonData.error).to.eql('Missing password');\r",
                "});\r",
                ""
              ],
              "_lastExecutionId": "0932f7e2-7131-434e-8e06-4b42dd452f1e"
            }
          }
        ]
      },
      {
        "id": "34dc4f59-bfbc-4969-b6c7-d199ef343f40",
        "name": "DELAYED RESPONSE",
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "users"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [
              {
                "key": "delay",
                "value": "3"
              }
            ],
            "variable": []
          },
          "method": "GET"
        },
        "response": [],
        "event": [
          {
            "listen": "test",
            "script": {
              "id": "e260573c-cc8c-4599-8fb5-120c66c9fc2a",
              "type": "text/javascript",
              "packages": {},
              "exec": [
                "pm.test(\"Status code is 200\", function () {\r",
                "    pm.response.to.have.status(200);\r",
                "});\r",
                "pm.test(\"Response time for DELAYED RESPONSE is less than 4000ms\", function () {\r",
                "    pm.expect(pm.response.responseTime).to.be.below(4000);\r",
                "});\r",
                "pm.test(\"Verify support text\", function () {\r",
                "    var jsonData = pm.response.json();\r",
                "    pm.expect(jsonData.support.text).to.eql(\"To keep ReqRes free, contributions towards server costs are appreciated!\");\r",
                "});"
              ],
              "_lastExecutionId": "a5185117-a9c9-47db-b2a9-9a8714d5fa67"
            }
          }
        ]
      }
    ],
    "event": [],
    "variable": [],
    "info": {
      "_postman_id": "a29aaf11-3150-403b-bf00-ffd60be59b92",
      "name": "REQRES.IN APIs ITI Project",
      "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
      "description": {
        "content": "API testing project using Postman for the reqres.in API\n\n**What is an API?**:  \nAPI is an acronym and it stands for Application Programming Interface. API is a set of routines, protocols, and tools for building Software Applications. APIs specify how one software program should interact with other software programs.\n\nRoutine: a program that performs a particular task. Routine is also known as procedure, function, or subroutine.\n\nProtocols: A format for transmitting data between two systems.\n\nIn simple words, API stands for Application Programming Interface. API acts as an interface between two software applications and allows the two software applications to communicate with each other. API is a collection of software functions that can be executed by another software program.\n\n**What is Automation Testing?**  \nAutomation Testing is a software testing technique that performs using special automated testing software tools to execute a test case suite. On the contrary,Manual Testing is performed by a human sitting in front of a computer carefully executing the test steps.  \nThe automation testing software can also enter test data into the System Under Test, compare expected and actual results and generate detailed test reports.Software Test Automation demands considerable investments of money and resources.  \nSuccessive development cycles will require execution of same test suite repeatedly. Using a test automation tool, it’s possible to record this test suite and re-play it as required. Once the test suite is automated, no human intervention is required. This improved ROI of Test Automation. The goal of Automation is to reduce the number of test cases to be run manually and not to eliminate Manual Testing altogether.\n\nLet’s see some examples of an API in a more approachable way.\n\nAssume an API as a Waiter at a Restaurant.\n\nAt a restaurant, you give an order based on the items available on the menu. A waiter in the restaurant writes down your order and delivers it to the kitchen who prepares your meal. Once the meal is ready, the waiter picks up your food from the kitchen and serves it to you at your table.\n\nIn this scenario, the waiter’s role is similar to an API. As a waiter, the API takes a request from a source, takes that request to the database, fetches the requested data from the database, and returns a response to the source.\n\nNow let’s see another example.\n\nIf you are using a flight service engine say Expedia, where you search for flights on a specific date. Once you pass the data such as Source, Destination, Onward Date, and Return Date and click on search. Expedia sends a request to airlines through an API as per your search details. The API then takes the airline’s response to your request and delivers it right back to Expedia.\n\n**What is API Testing?**  \nAPI testing is a type of software testing that involves testing APIs directly and also as a part of integration testing to check whether the API meets expectations in terms of functionality, reliability, performance, and security of an application. In API Testing our main focus will be on a Business logic layer of the software architecture. API testing can be performed on any software system which contains multiple APIs. API testing won’t concentrate on the look and feel of the application. API testing is entirely different from GUI Testing.\n\n**API Testing Types?**  \nAPI testing typically involves the following practices:\n\n- Unit testing: To test the functionality of individual operation\n    \n- Functional testing: To test the functionality of broader scenarios by using a block of unit test results tested together\n    \n- Load testing: To test the functionality and performance under load\n    \n- Runtime/Error Detection: To monitor an application to identify problems such as exceptions and resource leaks\n    \n- Security testing: To ensure that the implementation of the API is secure from external threats\n    \n- UI testing: It is performed as part of end-to-end integration tests to make sure every aspect of the user interface functions as expected\n    \n- Interoperability and WS Compliance testing: Interoperability and WS Compliance Testing is a type of testing that applies to SOAP APIs. Interoperability between SOAP APIs is checked by ensuring conformance to the Web Services Interoperability profiles. WS-\\* compliance is tested to ensure standards such as WS-Addressing, WS-Discovery, WS-Federation, WS-Policy, WS-Security, and WS-Trust are properly implemented and utilized\n    \n- Penetration testing: To find vulnerabilities of an application from attackers\n    \n- Fuzz testing: To test the API by forcibly input into the system in order to attempt a forced crash\n    \n\n**Common tests on APIs:**  \nSome of the common tests we perform on APIs are as follows.\n\n- To verify whether the return value is based on the input condition. The response of the APIs should be verified based on the request.\n    \n- To verify whether the system is authenticating the outcome when the API is updating any data structure\n    \n- To verify whether the API triggers some other event or request another API\n    \n- To verify the behavior of the API when there is no return value\n    \n\n**Advantages of API Testing:**\n\n- API Testing is time effective when compared to GUI Testing. API test automation requires less code so it can provide faster and better test coverage.\n    \n- API Testing helps us to reduce the testing cost. With API Testing we can find minor bugs before the GUI Testing. These minor bugs will become bigger during GUI Testing. So finding those bugs in the API Testing will be cost-effective to the Company.\n    \n- API Testing is language independent.\n    \n- API Testing is quite helpful in testing Core Functionality. We can test the APIs without a user interface. In - GUI Testing, we need to wait until the application is available to test the core functionalities.\n    \n- API Testing helps us to reduce the risks.\n    \n\n**What exactly needs to be verified in API Testing?**:  \nBasically, on API Testing, we send a request to the API with the known data and we analyze the response.\n\n- Data accuracy\n    \n- HTTP status codes\n    \n- Response time\n    \n- Error codes in case API return any errors\n    \n- Authorization checks\n    \n- Non-functional testing such as performance testing, security testing\n    \n\n**Tools used for API Testing:**:\n\n- _Postman_ Selected tool in this project\n    \n- Katalon Studio\n    \n- SoapUI\n    \n- Assertible\n    \n- Tricentis Tosca\n    \n- Apigee\n    \n- JMeter\n    \n- Rest-Assured\n    \n- Karate DSL\n    \n- API Fortress\n    \n- API Science\n    \n- APIary Inspector\n    \n\n**Difference between API testing and Unit Testing?**  \n| UNIT TESTING | API TESTING |  \n| ---- | ---- |  \n| Unit testing is conducted by the Development Team | API testing is conducted by QA Team |  \n| Unit testing is a form of White box testing | API testing is a form of Black box testing |  \n| Unit testing is conducted prior to the process of including the code in the build | API testing is conducted after the build is ready for testing |  \n| Source code is involved in Unit testing | Source code is not involved in API testing |  \n| In unit testing, the scope of testing is limited, so only basic functionalities are considered for testing | In API testing, the scope of testing is wide, so all the issues that are functional are considered for testing |\n\n**What is Postman?**  \nPostman is a API testing tool used by more than 20 million users. It has gained a immense popularity in the IT industry among the developers and testers. The simple and user-friendly interface helps when it comes to documenting, designing, and testing APIs. You can create requests to API endpoints, send various types of data, and examine responses effortlessly with Postman. Its simple and informative graphical user interface makes it easy for even a less experienced beginner to interact with APIs without digging into complex code.  \n**How Beneficial is Postman for API Testing?**\n\n- Quality assurance: API testing maintains trust and reputation by ensuring reliable performance.\n    \n- Early issue detection: Shift-left API testing finds and resolves defects promptly.\n    \n- Resource conservation: Automated API testing saves time and boosts innovation.\n    \n- Rapid iteration: API tests in CI/CD pipelines enable frequent bug-free releases.\n    \n- Efficient Test Organization: Postman’s interface supports the creation of reusable collections, enhancing test organization and sharing.\n    \n- Seamless CI Integration: Postman seamlessly integrates with leading CI tools, providing visibility into API builds alongside testing and development.\n    \n- Machine-Readable Documentation: Postman’s machine-readable documentation fosters clear communication and comprehension of APIs for team members and stakeholders.\n    \n- Real-Time Collaboration: Postman’s version control and collaboration capabilities promote real-time sharing and teamwork, reducing development cycle durations.\n    \n- Design and Mocking: Postman’s design and mocking features eliminate the need for initial backend server setup, expediting API development\n    \n\n**what is Newman?**  \nNewman is a command-line collection runner for Postman. It allows you to effortlessly run and test a Postman collection directly from the command-line. It is built with extensibility in mind so that you can easily integrate it with your continuous integration servers and build systems.",
        "type": "text/plain"
      }
    }
  },
  "environment": {
    "id": "5e882e1a-8ce0-421c-97df-35ab2687075e",
    "values": []
  },
  "globals": {
    "id": "9ec69fec-84cd-4f72-81b5-70f542193333",
    "values": []
  },
  "run": {
    "stats": {
      "iterations": {
        "total": 1,
        "pending": 0,
        "failed": 0
      },
      "items": {
        "total": 15,
        "pending": 0,
        "failed": 0
      },
      "scripts": {
        "total": 15,
        "pending": 0,
        "failed": 0
      },
      "prerequests": {
        "total": 15,
        "pending": 0,
        "failed": 0
      },
      "requests": {
        "total": 15,
        "pending": 0,
        "failed": 0
      },
      "tests": {
        "total": 15,
        "pending": 0,
        "failed": 0
      },
      "assertions": {
        "total": 50,
        "pending": 0,
        "failed": 0
      },
      "testScripts": {
        "total": 15,
        "pending": 0,
        "failed": 0
      },
      "prerequestScripts": {
        "total": 0,
        "pending": 0,
        "failed": 0
      }
    },
    "timings": {
      "responseAverage": 337.06666666666666,
      "responseMin": 64,
      "responseMax": 3141,
      "responseSd": 756.1346852394897,
      "dnsAverage": 0,
      "dnsMin": 0,
      "dnsMax": 0,
      "dnsSd": 0,
      "firstByteAverage": 0,
      "firstByteMin": 0,
      "firstByteMax": 0,
      "firstByteSd": 0,
      "started": 1711933977793,
      "completed": 1711933983891
    },
    "executions": [
      {
        "cursor": {
          "position": 0,
          "iteration": 0,
          "length": 15,
          "cycles": 1,
          "empty": false,
          "eof": false,
          "bof": true,
          "cr": false,
          "ref": "ef5fe549-dc40-449d-a58c-d3fb5d6d8609",
          "httpRequestId": "023b4b7b-a92c-4b10-888e-43f50bfb46d3"
        },
        "item": {
          "id": "f3f0b511-3714-4193-b624-496732216e5c",
          "name": "LIST USERS",
          "request": {
            "url": {
              "protocol": "https",
              "path": [
                "api",
                "users"
              ],
              "host": [
                "reqres",
                "in"
              ],
              "query": [
                {
                  "key": "page",
                  "value": "1"
                }
              ],
              "variable": []
            },
            "method": "GET"
          },
          "response": [],
          "event": [
            {
              "listen": "test",
              "script": {
                "id": "fd6bcc9b-f93d-4b9c-aa09-d684b2aeadb9",
                "type": "text/javascript",
                "packages": {},
                "exec": [
                  "pm.test(\"Status code is 200\", function () {\r",
                  "    pm.response.to.have.status(200);\r",
                  "});\r",
                  "pm.test(\"Response time for Reqres users is less than 1000ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                  "});\r",
                  "pm.test(\"verify page\", function () {\r",
                  "    var jsonData = pm.response.json();\r",
                  "    pm.expect(jsonData.page).to.eql(1);\r",
                  "});\r",
                  "pm.test(\"total_pages is 2\", function () {\r",
                  "    var jsonData = pm.response.json();\r",
                  "    pm.expect(jsonData.total_pages).to.eql(2);\r",
                  "});\r",
                  "pm.test(\"Response has expected structure\", function () {\r",
                  "    var jsonData = pm.response.json();\r",
                  "    pm.expect(jsonData).to.have.property('page');\r",
                  "    pm.expect(jsonData).to.have.property('per_page');\r",
                  "    pm.expect(jsonData).to.have.property('total');\r",
                  "    pm.expect(jsonData).to.have.property('total_pages');\r",
                  "    pm.expect(jsonData).to.have.property('data');\r",
                  "    pm.expect(jsonData).to.have.property('support');\r",
                  "});\r",
                  "pm.test(\"per_page is 6\", function () {\r",
                  "    var jsonData = pm.response.json();\r",
                  "    pm.expect(jsonData.per_page).to.eql(6);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "\r",
                  ""
                ],
                "_lastExecutionId": "61b4621b-68cd-4a33-945d-31c1a9907584"
              }
            }
          ]
        },
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "users"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [
              {
                "key": "page",
                "value": "1"
              }
            ],
            "variable": []
          },
          "header": [
            {
              "key": "User-Agent",
              "value": "PostmanRuntime/7.37.1",
              "system": true
            },
            {
              "key": "Accept",
              "value": "*/*",
              "system": true
            },
            {
              "key": "Cache-Control",
              "value": "no-cache",
              "system": true
            },
            {
              "key": "Postman-Token",
              "value": "73a3b80f-19d3-4f70-a358-f89bda9aea0a",
              "system": true
            },
            {
              "key": "Host",
              "value": "reqres.in",
              "system": true
            },
            {
              "key": "Accept-Encoding",
              "value": "gzip, deflate, br",
              "system": true
            },
            {
              "key": "Connection",
              "value": "keep-alive",
              "system": true
            }
          ],
          "method": "GET"
        },
        "response": {
          "id": "8b62f22d-fd65-44cc-9bdf-59fe3cb1f98e",
          "status": "OK",
          "code": 200,
          "header": [
            {
              "key": "Date",
              "value": "Mon, 01 Apr 2024 01:12:48 GMT"
            },
            {
              "key": "Content-Type",
              "value": "application/json; charset=utf-8"
            },
            {
              "key": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "key": "Connection",
              "value": "keep-alive"
            },
            {
              "key": "Report-To",
              "value": "{\"group\":\"heroku-nel\",\"max_age\":3600,\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?ts=1711923731&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=Pu%2F7c0%2FdpSAWWGX14U6UdJ0RxufCLPF2z9DT3OL9Yjc%3D\"}]}"
            },
            {
              "key": "Reporting-Endpoints",
              "value": "heroku-nel=https://nel.heroku.com/reports?ts=1711923731&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=Pu%2F7c0%2FdpSAWWGX14U6UdJ0RxufCLPF2z9DT3OL9Yjc%3D"
            },
            {
              "key": "Nel",
              "value": "{\"report_to\":\"heroku-nel\",\"max_age\":3600,\"success_fraction\":0.005,\"failure_fraction\":0.05,\"response_headers\":[\"Via\"]}"
            },
            {
              "key": "X-Powered-By",
              "value": "Express"
            },
            {
              "key": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "key": "Etag",
              "value": "W/\"3e4-2RLXvr5wTg9YQ6aH95CkYoFNuO8\""
            },
            {
              "key": "Via",
              "value": "1.1 vegur"
            },
            {
              "key": "Cache-Control",
              "value": "max-age=14400"
            },
            {
              "key": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "key": "Age",
              "value": "3020"
            },
            {
              "key": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "key": "Server",
              "value": "cloudflare"
            },
            {
              "key": "CF-RAY",
              "value": "86d4b687bd6c0daf-MRS"
            },
            {
              "key": "Content-Encoding",
              "value": "br"
            }
          ],
          "stream": {
            "type": "Buffer",
            "data": [
              123,
              34,
              112,
              97,
              103,
              101,
              34,
              58,
              49,
              44,
              34,
              112,
              101,
              114,
              95,
              112,
              97,
              103,
              101,
              34,
              58,
              54,
              44,
              34,
              116,
              111,
              116,
              97,
              108,
              34,
              58,
              49,
              50,
              44,
              34,
              116,
              111,
              116,
              97,
              108,
              95,
              112,
              97,
              103,
              101,
              115,
              34,
              58,
              50,
              44,
              34,
              100,
              97,
              116,
              97,
              34,
              58,
              91,
              123,
              34,
              105,
              100,
              34,
              58,
              49,
              44,
              34,
              101,
              109,
              97,
              105,
              108,
              34,
              58,
              34,
              103,
              101,
              111,
              114,
              103,
              101,
              46,
              98,
              108,
              117,
              116,
              104,
              64,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              34,
              44,
              34,
              102,
              105,
              114,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              71,
              101,
              111,
              114,
              103,
              101,
              34,
              44,
              34,
              108,
              97,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              66,
              108,
              117,
              116,
              104,
              34,
              44,
              34,
              97,
              118,
              97,
              116,
              97,
              114,
              34,
              58,
              34,
              104,
              116,
              116,
              112,
              115,
              58,
              47,
              47,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              47,
              105,
              109,
              103,
              47,
              102,
              97,
              99,
              101,
              115,
              47,
              49,
              45,
              105,
              109,
              97,
              103,
              101,
              46,
              106,
              112,
              103,
              34,
              125,
              44,
              123,
              34,
              105,
              100,
              34,
              58,
              50,
              44,
              34,
              101,
              109,
              97,
              105,
              108,
              34,
              58,
              34,
              106,
              97,
              110,
              101,
              116,
              46,
              119,
              101,
              97,
              118,
              101,
              114,
              64,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              34,
              44,
              34,
              102,
              105,
              114,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              74,
              97,
              110,
              101,
              116,
              34,
              44,
              34,
              108,
              97,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              87,
              101,
              97,
              118,
              101,
              114,
              34,
              44,
              34,
              97,
              118,
              97,
              116,
              97,
              114,
              34,
              58,
              34,
              104,
              116,
              116,
              112,
              115,
              58,
              47,
              47,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              47,
              105,
              109,
              103,
              47,
              102,
              97,
              99,
              101,
              115,
              47,
              50,
              45,
              105,
              109,
              97,
              103,
              101,
              46,
              106,
              112,
              103,
              34,
              125,
              44,
              123,
              34,
              105,
              100,
              34,
              58,
              51,
              44,
              34,
              101,
              109,
              97,
              105,
              108,
              34,
              58,
              34,
              101,
              109,
              109,
              97,
              46,
              119,
              111,
              110,
              103,
              64,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              34,
              44,
              34,
              102,
              105,
              114,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              69,
              109,
              109,
              97,
              34,
              44,
              34,
              108,
              97,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              87,
              111,
              110,
              103,
              34,
              44,
              34,
              97,
              118,
              97,
              116,
              97,
              114,
              34,
              58,
              34,
              104,
              116,
              116,
              112,
              115,
              58,
              47,
              47,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              47,
              105,
              109,
              103,
              47,
              102,
              97,
              99,
              101,
              115,
              47,
              51,
              45,
              105,
              109,
              97,
              103,
              101,
              46,
              106,
              112,
              103,
              34,
              125,
              44,
              123,
              34,
              105,
              100,
              34,
              58,
              52,
              44,
              34,
              101,
              109,
              97,
              105,
              108,
              34,
              58,
              34,
              101,
              118,
              101,
              46,
              104,
              111,
              108,
              116,
              64,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              34,
              44,
              34,
              102,
              105,
              114,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              69,
              118,
              101,
              34,
              44,
              34,
              108,
              97,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              72,
              111,
              108,
              116,
              34,
              44,
              34,
              97,
              118,
              97,
              116,
              97,
              114,
              34,
              58,
              34,
              104,
              116,
              116,
              112,
              115,
              58,
              47,
              47,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              47,
              105,
              109,
              103,
              47,
              102,
              97,
              99,
              101,
              115,
              47,
              52,
              45,
              105,
              109,
              97,
              103,
              101,
              46,
              106,
              112,
              103,
              34,
              125,
              44,
              123,
              34,
              105,
              100,
              34,
              58,
              53,
              44,
              34,
              101,
              109,
              97,
              105,
              108,
              34,
              58,
              34,
              99,
              104,
              97,
              114,
              108,
              101,
              115,
              46,
              109,
              111,
              114,
              114,
              105,
              115,
              64,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              34,
              44,
              34,
              102,
              105,
              114,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              67,
              104,
              97,
              114,
              108,
              101,
              115,
              34,
              44,
              34,
              108,
              97,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              77,
              111,
              114,
              114,
              105,
              115,
              34,
              44,
              34,
              97,
              118,
              97,
              116,
              97,
              114,
              34,
              58,
              34,
              104,
              116,
              116,
              112,
              115,
              58,
              47,
              47,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              47,
              105,
              109,
              103,
              47,
              102,
              97,
              99,
              101,
              115,
              47,
              53,
              45,
              105,
              109,
              97,
              103,
              101,
              46,
              106,
              112,
              103,
              34,
              125,
              44,
              123,
              34,
              105,
              100,
              34,
              58,
              54,
              44,
              34,
              101,
              109,
              97,
              105,
              108,
              34,
              58,
              34,
              116,
              114,
              97,
              99,
              101,
              121,
              46,
              114,
              97,
              109,
              111,
              115,
              64,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              34,
              44,
              34,
              102,
              105,
              114,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              84,
              114,
              97,
              99,
              101,
              121,
              34,
              44,
              34,
              108,
              97,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              82,
              97,
              109,
              111,
              115,
              34,
              44,
              34,
              97,
              118,
              97,
              116,
              97,
              114,
              34,
              58,
              34,
              104,
              116,
              116,
              112,
              115,
              58,
              47,
              47,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              47,
              105,
              109,
              103,
              47,
              102,
              97,
              99,
              101,
              115,
              47,
              54,
              45,
              105,
              109,
              97,
              103,
              101,
              46,
              106,
              112,
              103,
              34,
              125,
              93,
              44,
              34,
              115,
              117,
              112,
              112,
              111,
              114,
              116,
              34,
              58,
              123,
              34,
              117,
              114,
              108,
              34,
              58,
              34,
              104,
              116,
              116,
              112,
              115,
              58,
              47,
              47,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              47,
              35,
              115,
              117,
              112,
              112,
              111,
              114,
              116,
              45,
              104,
              101,
              97,
              100,
              105,
              110,
              103,
              34,
              44,
              34,
              116,
              101,
              120,
              116,
              34,
              58,
              34,
              84,
              111,
              32,
              107,
              101,
              101,
              112,
              32,
              82,
              101,
              113,
              82,
              101,
              115,
              32,
              102,
              114,
              101,
              101,
              44,
              32,
              99,
              111,
              110,
              116,
              114,
              105,
              98,
              117,
              116,
              105,
              111,
              110,
              115,
              32,
              116,
              111,
              119,
              97,
              114,
              100,
              115,
              32,
              115,
              101,
              114,
              118,
              101,
              114,
              32,
              99,
              111,
              115,
              116,
              115,
              32,
              97,
              114,
              101,
              32,
              97,
              112,
              112,
              114,
              101,
              99,
              105,
              97,
              116,
              101,
              100,
              33,
              34,
              125,
              125
            ]
          },
          "cookie": [],
          "responseTime": 496,
          "responseSize": 996
        },
        "id": "f3f0b511-3714-4193-b624-496732216e5c",
        "assertions": [
          {
            "assertion": "Status code is 200",
            "skipped": false
          },
          {
            "assertion": "Response time for Reqres users is less than 1000ms",
            "skipped": false
          },
          {
            "assertion": "verify page",
            "skipped": false
          },
          {
            "assertion": "total_pages is 2",
            "skipped": false
          },
          {
            "assertion": "Response has expected structure",
            "skipped": false
          },
          {
            "assertion": "per_page is 6",
            "skipped": false
          }
        ]
      },
      {
        "cursor": {
          "ref": "bb856ace-32ae-4063-ae67-07aec55e8267",
          "length": 15,
          "cycles": 1,
          "position": 1,
          "iteration": 0,
          "httpRequestId": "ebe32759-fe58-424c-8d19-3f164c44338a"
        },
        "item": {
          "id": "47861294-8fb8-4753-81a7-16d78cbf8fd0",
          "name": "SINGLE USER",
          "request": {
            "url": {
              "protocol": "https",
              "path": [
                "api",
                "users"
              ],
              "host": [
                "reqres",
                "in"
              ],
              "query": [
                {
                  "key": "id",
                  "value": "2"
                }
              ],
              "variable": []
            },
            "method": "GET"
          },
          "response": [],
          "event": [
            {
              "listen": "test",
              "script": {
                "id": "90e469b8-af22-4905-a351-3e563c172ea5",
                "type": "text/javascript",
                "packages": {},
                "exec": [
                  "pm.test(\"Status code is 200\", function () {\r",
                  "    pm.response.to.have.status(200);\r",
                  "});\r",
                  "pm.test(\"Response time for Reqres user only is less than 1000ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                  "});\r",
                  "pm.test(\"Response has expected structure\", function () {\r",
                  "    var jsonData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(jsonData).to.have.property('data');\r",
                  "    pm.expect(jsonData.data).to.have.property('id', 2);\r",
                  "    pm.expect(jsonData.data).to.have.property('email', 'janet.weaver@reqres.in');\r",
                  "    pm.expect(jsonData.data).to.have.property('first_name', 'Janet');\r",
                  "    pm.expect(jsonData.data).to.have.property('last_name', 'Weaver');\r",
                  "    pm.expect(jsonData.data).to.have.property('avatar', 'https://reqres.in/img/faces/2-image.jpg');\r",
                  "    \r",
                  "    pm.expect(jsonData).to.have.property('support');\r",
                  "    pm.expect(jsonData.support).to.have.property('url', 'https://reqres.in/#support-heading');\r",
                  "    pm.expect(jsonData.support).to.have.property('text', 'To keep ReqRes free, contributions towards server costs are appreciated!');\r",
                  "});"
                ],
                "_lastExecutionId": "cb6be407-d0a8-4eff-8101-1695605c0de3"
              }
            }
          ]
        },
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "users"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [
              {
                "key": "id",
                "value": "2"
              }
            ],
            "variable": []
          },
          "header": [
            {
              "key": "User-Agent",
              "value": "PostmanRuntime/7.37.1",
              "system": true
            },
            {
              "key": "Accept",
              "value": "*/*",
              "system": true
            },
            {
              "key": "Cache-Control",
              "value": "no-cache",
              "system": true
            },
            {
              "key": "Postman-Token",
              "value": "ce170bc8-6168-4694-917c-3a1561cb1515",
              "system": true
            },
            {
              "key": "Host",
              "value": "reqres.in",
              "system": true
            },
            {
              "key": "Accept-Encoding",
              "value": "gzip, deflate, br",
              "system": true
            },
            {
              "key": "Connection",
              "value": "keep-alive",
              "system": true
            }
          ],
          "method": "GET"
        },
        "response": {
          "id": "d632cf54-39db-49de-9b98-2a2e444e7eb5",
          "status": "OK",
          "code": 200,
          "header": [
            {
              "key": "Date",
              "value": "Mon, 01 Apr 2024 01:12:48 GMT"
            },
            {
              "key": "Content-Type",
              "value": "application/json; charset=utf-8"
            },
            {
              "key": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "key": "Connection",
              "value": "keep-alive"
            },
            {
              "key": "Report-To",
              "value": "{\"group\":\"heroku-nel\",\"max_age\":3600,\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?ts=1711933913&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=yantfdc9YR5SGinqjqdm7rwSpejluNbYQ9TZ2%2FA%2F1CE%3D\"}]}"
            },
            {
              "key": "Reporting-Endpoints",
              "value": "heroku-nel=https://nel.heroku.com/reports?ts=1711933913&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=yantfdc9YR5SGinqjqdm7rwSpejluNbYQ9TZ2%2FA%2F1CE%3D"
            },
            {
              "key": "Nel",
              "value": "{\"report_to\":\"heroku-nel\",\"max_age\":3600,\"success_fraction\":0.005,\"failure_fraction\":0.05,\"response_headers\":[\"Via\"]}"
            },
            {
              "key": "X-Powered-By",
              "value": "Express"
            },
            {
              "key": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "key": "Etag",
              "value": "W/\"118-pbdwwFo9SKNhD3Lx5iHJyngpq00\""
            },
            {
              "key": "Via",
              "value": "1.1 vegur"
            },
            {
              "key": "Cache-Control",
              "value": "max-age=14400"
            },
            {
              "key": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "key": "Age",
              "value": "55"
            },
            {
              "key": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "key": "Server",
              "value": "cloudflare"
            },
            {
              "key": "CF-RAY",
              "value": "86d4b6895f2b0daf-MRS"
            },
            {
              "key": "Content-Encoding",
              "value": "br"
            }
          ],
          "stream": {
            "type": "Buffer",
            "data": [
              123,
              34,
              100,
              97,
              116,
              97,
              34,
              58,
              123,
              34,
              105,
              100,
              34,
              58,
              50,
              44,
              34,
              101,
              109,
              97,
              105,
              108,
              34,
              58,
              34,
              106,
              97,
              110,
              101,
              116,
              46,
              119,
              101,
              97,
              118,
              101,
              114,
              64,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              34,
              44,
              34,
              102,
              105,
              114,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              74,
              97,
              110,
              101,
              116,
              34,
              44,
              34,
              108,
              97,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              87,
              101,
              97,
              118,
              101,
              114,
              34,
              44,
              34,
              97,
              118,
              97,
              116,
              97,
              114,
              34,
              58,
              34,
              104,
              116,
              116,
              112,
              115,
              58,
              47,
              47,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              47,
              105,
              109,
              103,
              47,
              102,
              97,
              99,
              101,
              115,
              47,
              50,
              45,
              105,
              109,
              97,
              103,
              101,
              46,
              106,
              112,
              103,
              34,
              125,
              44,
              34,
              115,
              117,
              112,
              112,
              111,
              114,
              116,
              34,
              58,
              123,
              34,
              117,
              114,
              108,
              34,
              58,
              34,
              104,
              116,
              116,
              112,
              115,
              58,
              47,
              47,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              47,
              35,
              115,
              117,
              112,
              112,
              111,
              114,
              116,
              45,
              104,
              101,
              97,
              100,
              105,
              110,
              103,
              34,
              44,
              34,
              116,
              101,
              120,
              116,
              34,
              58,
              34,
              84,
              111,
              32,
              107,
              101,
              101,
              112,
              32,
              82,
              101,
              113,
              82,
              101,
              115,
              32,
              102,
              114,
              101,
              101,
              44,
              32,
              99,
              111,
              110,
              116,
              114,
              105,
              98,
              117,
              116,
              105,
              111,
              110,
              115,
              32,
              116,
              111,
              119,
              97,
              114,
              100,
              115,
              32,
              115,
              101,
              114,
              118,
              101,
              114,
              32,
              99,
              111,
              115,
              116,
              115,
              32,
              97,
              114,
              101,
              32,
              97,
              112,
              112,
              114,
              101,
              99,
              105,
              97,
              116,
              101,
              100,
              33,
              34,
              125,
              125
            ]
          },
          "cookie": [],
          "responseTime": 73,
          "responseSize": 280
        },
        "id": "47861294-8fb8-4753-81a7-16d78cbf8fd0",
        "assertions": [
          {
            "assertion": "Status code is 200",
            "skipped": false
          },
          {
            "assertion": "Response time for Reqres user only is less than 1000ms",
            "skipped": false
          },
          {
            "assertion": "Response has expected structure",
            "skipped": false
          }
        ]
      },
      {
        "cursor": {
          "ref": "360b802d-cda7-4e67-be71-099e22644a30",
          "length": 15,
          "cycles": 1,
          "position": 2,
          "iteration": 0,
          "httpRequestId": "f1388fbe-0704-40a1-ab84-486c39d3a829"
        },
        "item": {
          "id": "49ef0d6f-fc19-45fc-9a4d-662b45eb07be",
          "name": "SINGLE USER NOT FOUND",
          "request": {
            "url": {
              "protocol": "https",
              "path": [
                "api",
                "users",
                "23"
              ],
              "host": [
                "reqres",
                "in"
              ],
              "query": [],
              "variable": []
            },
            "method": "GET"
          },
          "response": [],
          "event": [
            {
              "listen": "test",
              "script": {
                "id": "fb2d0961-4e89-4b12-b715-68f94644a695",
                "type": "text/javascript",
                "packages": {},
                "exec": [
                  "pm.test(\"Status code is 404\", function () {\r",
                  "    pm.response.to.have.status(404);\r",
                  "});\r",
                  "pm.test(\"Response time for Reqres users NOT FOUND is less than 1000ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                  "});\r",
                  "pm.test(\"Data empty\", function () {\r",
                  "    var jsonData = pm.response.json();\r",
                  "    pm.expect(jsonData).to.empty;\r",
                  "});\r",
                  "pm.test(\"Response is empty\", function () {\r",
                  "    pm.expect(pm.response.text()).to.eql('{}');\r",
                  "});\r",
                  ""
                ],
                "_lastExecutionId": "d9bc92df-df40-495e-9744-1ccb32aa51f4"
              }
            }
          ]
        },
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "users",
              "23"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "header": [
            {
              "key": "User-Agent",
              "value": "PostmanRuntime/7.37.1",
              "system": true
            },
            {
              "key": "Accept",
              "value": "*/*",
              "system": true
            },
            {
              "key": "Cache-Control",
              "value": "no-cache",
              "system": true
            },
            {
              "key": "Postman-Token",
              "value": "a5511080-f4fc-484c-bf1d-3e8caef4d210",
              "system": true
            },
            {
              "key": "Host",
              "value": "reqres.in",
              "system": true
            },
            {
              "key": "Accept-Encoding",
              "value": "gzip, deflate, br",
              "system": true
            },
            {
              "key": "Connection",
              "value": "keep-alive",
              "system": true
            }
          ],
          "method": "GET"
        },
        "response": {
          "id": "85dfd330-7578-4cb2-9efd-0c5b561e89ae",
          "status": "Not Found",
          "code": 404,
          "header": [
            {
              "key": "Date",
              "value": "Mon, 01 Apr 2024 01:12:49 GMT"
            },
            {
              "key": "Content-Type",
              "value": "application/json; charset=utf-8"
            },
            {
              "key": "Content-Length",
              "value": "2"
            },
            {
              "key": "Connection",
              "value": "keep-alive"
            },
            {
              "key": "Report-To",
              "value": "{\"group\":\"heroku-nel\",\"max_age\":3600,\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?ts=1711933913&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=yantfdc9YR5SGinqjqdm7rwSpejluNbYQ9TZ2%2FA%2F1CE%3D\"}]}"
            },
            {
              "key": "Reporting-Endpoints",
              "value": "heroku-nel=https://nel.heroku.com/reports?ts=1711933913&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=yantfdc9YR5SGinqjqdm7rwSpejluNbYQ9TZ2%2FA%2F1CE%3D"
            },
            {
              "key": "Nel",
              "value": "{\"report_to\":\"heroku-nel\",\"max_age\":3600,\"success_fraction\":0.005,\"failure_fraction\":0.05,\"response_headers\":[\"Via\"]}"
            },
            {
              "key": "X-Powered-By",
              "value": "Express"
            },
            {
              "key": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "key": "Etag",
              "value": "W/\"2-vyGp6PvFo4RvsFtPoIWeCReyIC8\""
            },
            {
              "key": "Via",
              "value": "1.1 vegur"
            },
            {
              "key": "Cache-Control",
              "value": "max-age=14400"
            },
            {
              "key": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "key": "Age",
              "value": "56"
            },
            {
              "key": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "key": "Server",
              "value": "cloudflare"
            },
            {
              "key": "CF-RAY",
              "value": "86d4b68a98820daf-MRS"
            }
          ],
          "stream": {
            "type": "Buffer",
            "data": [
              123,
              125
            ]
          },
          "cookie": [],
          "responseTime": 72,
          "responseSize": 2
        },
        "id": "49ef0d6f-fc19-45fc-9a4d-662b45eb07be",
        "assertions": [
          {
            "assertion": "Status code is 404",
            "skipped": false
          },
          {
            "assertion": "Response time for Reqres users NOT FOUND is less than 1000ms",
            "skipped": false
          },
          {
            "assertion": "Data empty",
            "skipped": false
          },
          {
            "assertion": "Response is empty",
            "skipped": false
          }
        ]
      },
      {
        "cursor": {
          "ref": "4ba31315-8e92-4b47-b5ed-b255d7698679",
          "length": 15,
          "cycles": 1,
          "position": 3,
          "iteration": 0,
          "httpRequestId": "69aa9f78-3737-44fb-850e-a314396ad89a"
        },
        "item": {
          "id": "c5ba5e5b-c7d9-45d4-85ac-2af37226391f",
          "name": "LIST <RESOURCE>",
          "request": {
            "url": {
              "protocol": "https",
              "path": [
                "api",
                "unknown"
              ],
              "host": [
                "reqres",
                "in"
              ],
              "query": [],
              "variable": []
            },
            "method": "GET"
          },
          "response": [],
          "event": [
            {
              "listen": "test",
              "script": {
                "id": "be98ab1b-ed88-4b07-9134-c806a1d76aec",
                "type": "text/javascript",
                "packages": {},
                "exec": [
                  "pm.test(\"Status code is 200\", function () {\r",
                  "    pm.response.to.have.status(200);\r",
                  "});\r",
                  "pm.test(\"Response time for unknown lists reqres is less than 1000ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                  "});\r",
                  "pm.test(\"verify total_pages\", function () {\r",
                  "    var jsonData = pm.response.json();\r",
                  "    pm.expect(jsonData.total_pages).to.eql(2);\r",
                  "})\r",
                  "pm.test(\"Response structure is correct\", function () {\r",
                  "    var jsonData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(jsonData).to.have.property('page');\r",
                  "    pm.expect(jsonData).to.have.property('per_page');\r",
                  "    pm.expect(jsonData).to.have.property('total');\r",
                  "    pm.expect(jsonData).to.have.property('total_pages');\r",
                  "    pm.expect(jsonData).to.have.property('data');\r",
                  "    pm.expect(jsonData).to.have.property('support');\r",
                  "    \r",
                  "    pm.expect(jsonData.data).to.be.an('array');\r",
                  "    pm.expect(jsonData.data.length).to.eql(6);\r",
                  "    \r",
                  "    jsonData.data.forEach(function(item, index) {\r",
                  "        pm.expect(item).to.have.property('id');\r",
                  "        pm.expect(item).to.have.property('name');\r",
                  "        pm.expect(item).to.have.property('year');\r",
                  "        pm.expect(item).to.have.property('color');\r",
                  "        pm.expect(item).to.have.property('pantone_value');\r",
                  "    });\r",
                  "    \r",
                  "    pm.expect(jsonData.support).to.have.property('url');\r",
                  "    pm.expect(jsonData.support).to.have.property('text');\r",
                  "});\r",
                  "pm.test(\"Content-Type is present\", function () {\r",
                  "    pm.response.to.have.header(\"Content-Type\");\r",
                  "});\r",
                  ""
                ],
                "_lastExecutionId": "b69e60ff-766f-46ae-8c07-2c79d02c186d"
              }
            }
          ]
        },
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "unknown"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "header": [
            {
              "key": "User-Agent",
              "value": "PostmanRuntime/7.37.1",
              "system": true
            },
            {
              "key": "Accept",
              "value": "*/*",
              "system": true
            },
            {
              "key": "Cache-Control",
              "value": "no-cache",
              "system": true
            },
            {
              "key": "Postman-Token",
              "value": "750b3c0a-0d99-47c2-8cd5-a6bd97ac9a7a",
              "system": true
            },
            {
              "key": "Host",
              "value": "reqres.in",
              "system": true
            },
            {
              "key": "Accept-Encoding",
              "value": "gzip, deflate, br",
              "system": true
            },
            {
              "key": "Connection",
              "value": "keep-alive",
              "system": true
            }
          ],
          "method": "GET"
        },
        "response": {
          "id": "8f6ac9e3-d361-4182-9f69-8a3bb030802c",
          "status": "OK",
          "code": 200,
          "header": [
            {
              "key": "Date",
              "value": "Mon, 01 Apr 2024 01:12:49 GMT"
            },
            {
              "key": "Content-Type",
              "value": "application/json; charset=utf-8"
            },
            {
              "key": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "key": "Connection",
              "value": "keep-alive"
            },
            {
              "key": "Report-To",
              "value": "{\"group\":\"heroku-nel\",\"max_age\":3600,\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?ts=1711929660&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=SYVZOCJ1GS8qx%2BtgbNAskqcSFyLiBLsmG1CbZj6R6hE%3D\"}]}"
            },
            {
              "key": "Reporting-Endpoints",
              "value": "heroku-nel=https://nel.heroku.com/reports?ts=1711929660&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=SYVZOCJ1GS8qx%2BtgbNAskqcSFyLiBLsmG1CbZj6R6hE%3D"
            },
            {
              "key": "Nel",
              "value": "{\"report_to\":\"heroku-nel\",\"max_age\":3600,\"success_fraction\":0.005,\"failure_fraction\":0.05,\"response_headers\":[\"Via\"]}"
            },
            {
              "key": "X-Powered-By",
              "value": "Express"
            },
            {
              "key": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "key": "Etag",
              "value": "W/\"2c1-N6Rqerxquq2kgQhL51EiSg4x0R8\""
            },
            {
              "key": "Via",
              "value": "1.1 vegur"
            },
            {
              "key": "Cache-Control",
              "value": "max-age=14400"
            },
            {
              "key": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "key": "Age",
              "value": "4309"
            },
            {
              "key": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "key": "Server",
              "value": "cloudflare"
            },
            {
              "key": "CF-RAY",
              "value": "86d4b68b393e0daf-MRS"
            },
            {
              "key": "Content-Encoding",
              "value": "br"
            }
          ],
          "stream": {
            "type": "Buffer",
            "data": [
              123,
              34,
              112,
              97,
              103,
              101,
              34,
              58,
              49,
              44,
              34,
              112,
              101,
              114,
              95,
              112,
              97,
              103,
              101,
              34,
              58,
              54,
              44,
              34,
              116,
              111,
              116,
              97,
              108,
              34,
              58,
              49,
              50,
              44,
              34,
              116,
              111,
              116,
              97,
              108,
              95,
              112,
              97,
              103,
              101,
              115,
              34,
              58,
              50,
              44,
              34,
              100,
              97,
              116,
              97,
              34,
              58,
              91,
              123,
              34,
              105,
              100,
              34,
              58,
              49,
              44,
              34,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              99,
              101,
              114,
              117,
              108,
              101,
              97,
              110,
              34,
              44,
              34,
              121,
              101,
              97,
              114,
              34,
              58,
              50,
              48,
              48,
              48,
              44,
              34,
              99,
              111,
              108,
              111,
              114,
              34,
              58,
              34,
              35,
              57,
              56,
              66,
              50,
              68,
              49,
              34,
              44,
              34,
              112,
              97,
              110,
              116,
              111,
              110,
              101,
              95,
              118,
              97,
              108,
              117,
              101,
              34,
              58,
              34,
              49,
              53,
              45,
              52,
              48,
              50,
              48,
              34,
              125,
              44,
              123,
              34,
              105,
              100,
              34,
              58,
              50,
              44,
              34,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              102,
              117,
              99,
              104,
              115,
              105,
              97,
              32,
              114,
              111,
              115,
              101,
              34,
              44,
              34,
              121,
              101,
              97,
              114,
              34,
              58,
              50,
              48,
              48,
              49,
              44,
              34,
              99,
              111,
              108,
              111,
              114,
              34,
              58,
              34,
              35,
              67,
              55,
              52,
              51,
              55,
              53,
              34,
              44,
              34,
              112,
              97,
              110,
              116,
              111,
              110,
              101,
              95,
              118,
              97,
              108,
              117,
              101,
              34,
              58,
              34,
              49,
              55,
              45,
              50,
              48,
              51,
              49,
              34,
              125,
              44,
              123,
              34,
              105,
              100,
              34,
              58,
              51,
              44,
              34,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              116,
              114,
              117,
              101,
              32,
              114,
              101,
              100,
              34,
              44,
              34,
              121,
              101,
              97,
              114,
              34,
              58,
              50,
              48,
              48,
              50,
              44,
              34,
              99,
              111,
              108,
              111,
              114,
              34,
              58,
              34,
              35,
              66,
              70,
              49,
              57,
              51,
              50,
              34,
              44,
              34,
              112,
              97,
              110,
              116,
              111,
              110,
              101,
              95,
              118,
              97,
              108,
              117,
              101,
              34,
              58,
              34,
              49,
              57,
              45,
              49,
              54,
              54,
              52,
              34,
              125,
              44,
              123,
              34,
              105,
              100,
              34,
              58,
              52,
              44,
              34,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              97,
              113,
              117,
              97,
              32,
              115,
              107,
              121,
              34,
              44,
              34,
              121,
              101,
              97,
              114,
              34,
              58,
              50,
              48,
              48,
              51,
              44,
              34,
              99,
              111,
              108,
              111,
              114,
              34,
              58,
              34,
              35,
              55,
              66,
              67,
              52,
              67,
              52,
              34,
              44,
              34,
              112,
              97,
              110,
              116,
              111,
              110,
              101,
              95,
              118,
              97,
              108,
              117,
              101,
              34,
              58,
              34,
              49,
              52,
              45,
              52,
              56,
              49,
              49,
              34,
              125,
              44,
              123,
              34,
              105,
              100,
              34,
              58,
              53,
              44,
              34,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              116,
              105,
              103,
              101,
              114,
              108,
              105,
              108,
              121,
              34,
              44,
              34,
              121,
              101,
              97,
              114,
              34,
              58,
              50,
              48,
              48,
              52,
              44,
              34,
              99,
              111,
              108,
              111,
              114,
              34,
              58,
              34,
              35,
              69,
              50,
              53,
              56,
              51,
              69,
              34,
              44,
              34,
              112,
              97,
              110,
              116,
              111,
              110,
              101,
              95,
              118,
              97,
              108,
              117,
              101,
              34,
              58,
              34,
              49,
              55,
              45,
              49,
              52,
              53,
              54,
              34,
              125,
              44,
              123,
              34,
              105,
              100,
              34,
              58,
              54,
              44,
              34,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              98,
              108,
              117,
              101,
              32,
              116,
              117,
              114,
              113,
              117,
              111,
              105,
              115,
              101,
              34,
              44,
              34,
              121,
              101,
              97,
              114,
              34,
              58,
              50,
              48,
              48,
              53,
              44,
              34,
              99,
              111,
              108,
              111,
              114,
              34,
              58,
              34,
              35,
              53,
              51,
              66,
              48,
              65,
              69,
              34,
              44,
              34,
              112,
              97,
              110,
              116,
              111,
              110,
              101,
              95,
              118,
              97,
              108,
              117,
              101,
              34,
              58,
              34,
              49,
              53,
              45,
              53,
              50,
              49,
              55,
              34,
              125,
              93,
              44,
              34,
              115,
              117,
              112,
              112,
              111,
              114,
              116,
              34,
              58,
              123,
              34,
              117,
              114,
              108,
              34,
              58,
              34,
              104,
              116,
              116,
              112,
              115,
              58,
              47,
              47,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              47,
              35,
              115,
              117,
              112,
              112,
              111,
              114,
              116,
              45,
              104,
              101,
              97,
              100,
              105,
              110,
              103,
              34,
              44,
              34,
              116,
              101,
              120,
              116,
              34,
              58,
              34,
              84,
              111,
              32,
              107,
              101,
              101,
              112,
              32,
              82,
              101,
              113,
              82,
              101,
              115,
              32,
              102,
              114,
              101,
              101,
              44,
              32,
              99,
              111,
              110,
              116,
              114,
              105,
              98,
              117,
              116,
              105,
              111,
              110,
              115,
              32,
              116,
              111,
              119,
              97,
              114,
              100,
              115,
              32,
              115,
              101,
              114,
              118,
              101,
              114,
              32,
              99,
              111,
              115,
              116,
              115,
              32,
              97,
              114,
              101,
              32,
              97,
              112,
              112,
              114,
              101,
              99,
              105,
              97,
              116,
              101,
              100,
              33,
              34,
              125,
              125
            ]
          },
          "cookie": [],
          "responseTime": 64,
          "responseSize": 705
        },
        "id": "c5ba5e5b-c7d9-45d4-85ac-2af37226391f",
        "assertions": [
          {
            "assertion": "Status code is 200",
            "skipped": false
          },
          {
            "assertion": "Response time for unknown lists reqres is less than 1000ms",
            "skipped": false
          },
          {
            "assertion": "verify total_pages",
            "skipped": false
          },
          {
            "assertion": "Response structure is correct",
            "skipped": false
          },
          {
            "assertion": "Content-Type is present",
            "skipped": false
          }
        ]
      },
      {
        "cursor": {
          "ref": "e5e985cc-e59f-4f17-8c68-cec1667f8647",
          "length": 15,
          "cycles": 1,
          "position": 4,
          "iteration": 0,
          "httpRequestId": "9b288043-27bf-4822-9aff-c0bf0e54a074"
        },
        "item": {
          "id": "7cb0f3dd-6a60-4b04-bea3-8b25fe1fdea5",
          "name": "SINGLE <RESOURCE>",
          "request": {
            "url": {
              "protocol": "https",
              "path": [
                "api",
                "unknown",
                "2"
              ],
              "host": [
                "reqres",
                "in"
              ],
              "query": [],
              "variable": []
            },
            "method": "GET"
          },
          "response": [],
          "event": [
            {
              "listen": "test",
              "script": {
                "id": "ecafc8ed-bd43-4baa-b2d8-856269307999",
                "type": "text/javascript",
                "packages": {},
                "exec": [
                  "pm.test(\"Status code is 200\", function () {\r",
                  "    pm.response.to.have.status(200);\r",
                  "});\r",
                  "pm.test(\"Response time for unknown single reqres is less than 1000ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                  "});"
                ],
                "_lastExecutionId": "36884452-54db-4f8f-92ca-47ba7aa3a558"
              }
            }
          ]
        },
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "unknown",
              "2"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "header": [
            {
              "key": "User-Agent",
              "value": "PostmanRuntime/7.37.1",
              "system": true
            },
            {
              "key": "Accept",
              "value": "*/*",
              "system": true
            },
            {
              "key": "Cache-Control",
              "value": "no-cache",
              "system": true
            },
            {
              "key": "Postman-Token",
              "value": "9cd996eb-41e4-4380-b149-4879960b5216",
              "system": true
            },
            {
              "key": "Host",
              "value": "reqres.in",
              "system": true
            },
            {
              "key": "Accept-Encoding",
              "value": "gzip, deflate, br",
              "system": true
            },
            {
              "key": "Connection",
              "value": "keep-alive",
              "system": true
            }
          ],
          "method": "GET"
        },
        "response": {
          "id": "67590a9d-1434-4ad6-a061-a21612fd4014",
          "status": "OK",
          "code": 200,
          "header": [
            {
              "key": "Date",
              "value": "Mon, 01 Apr 2024 01:12:49 GMT"
            },
            {
              "key": "Content-Type",
              "value": "application/json; charset=utf-8"
            },
            {
              "key": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "key": "Connection",
              "value": "keep-alive"
            },
            {
              "key": "Report-To",
              "value": "{\"group\":\"heroku-nel\",\"max_age\":3600,\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?ts=1711930408&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=cBjyaCz33A%2FwpcsvID9hYmGkiFOKPKkIMO8z55MBppw%3D\"}]}"
            },
            {
              "key": "Reporting-Endpoints",
              "value": "heroku-nel=https://nel.heroku.com/reports?ts=1711930408&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=cBjyaCz33A%2FwpcsvID9hYmGkiFOKPKkIMO8z55MBppw%3D"
            },
            {
              "key": "Nel",
              "value": "{\"report_to\":\"heroku-nel\",\"max_age\":3600,\"success_fraction\":0.005,\"failure_fraction\":0.05,\"response_headers\":[\"Via\"]}"
            },
            {
              "key": "X-Powered-By",
              "value": "Express"
            },
            {
              "key": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "key": "Etag",
              "value": "W/\"e8-ov4wWh4/OY1IMQMqWgskYtOFnVs\""
            },
            {
              "key": "Via",
              "value": "1.1 vegur"
            },
            {
              "key": "Cache-Control",
              "value": "max-age=14400"
            },
            {
              "key": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "key": "Age",
              "value": "3561"
            },
            {
              "key": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "key": "Server",
              "value": "cloudflare"
            },
            {
              "key": "CF-RAY",
              "value": "86d4b68c0a0f0daf-MRS"
            },
            {
              "key": "Content-Encoding",
              "value": "br"
            }
          ],
          "stream": {
            "type": "Buffer",
            "data": [
              123,
              34,
              100,
              97,
              116,
              97,
              34,
              58,
              123,
              34,
              105,
              100,
              34,
              58,
              50,
              44,
              34,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              102,
              117,
              99,
              104,
              115,
              105,
              97,
              32,
              114,
              111,
              115,
              101,
              34,
              44,
              34,
              121,
              101,
              97,
              114,
              34,
              58,
              50,
              48,
              48,
              49,
              44,
              34,
              99,
              111,
              108,
              111,
              114,
              34,
              58,
              34,
              35,
              67,
              55,
              52,
              51,
              55,
              53,
              34,
              44,
              34,
              112,
              97,
              110,
              116,
              111,
              110,
              101,
              95,
              118,
              97,
              108,
              117,
              101,
              34,
              58,
              34,
              49,
              55,
              45,
              50,
              48,
              51,
              49,
              34,
              125,
              44,
              34,
              115,
              117,
              112,
              112,
              111,
              114,
              116,
              34,
              58,
              123,
              34,
              117,
              114,
              108,
              34,
              58,
              34,
              104,
              116,
              116,
              112,
              115,
              58,
              47,
              47,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              47,
              35,
              115,
              117,
              112,
              112,
              111,
              114,
              116,
              45,
              104,
              101,
              97,
              100,
              105,
              110,
              103,
              34,
              44,
              34,
              116,
              101,
              120,
              116,
              34,
              58,
              34,
              84,
              111,
              32,
              107,
              101,
              101,
              112,
              32,
              82,
              101,
              113,
              82,
              101,
              115,
              32,
              102,
              114,
              101,
              101,
              44,
              32,
              99,
              111,
              110,
              116,
              114,
              105,
              98,
              117,
              116,
              105,
              111,
              110,
              115,
              32,
              116,
              111,
              119,
              97,
              114,
              100,
              115,
              32,
              115,
              101,
              114,
              118,
              101,
              114,
              32,
              99,
              111,
              115,
              116,
              115,
              32,
              97,
              114,
              101,
              32,
              97,
              112,
              112,
              114,
              101,
              99,
              105,
              97,
              116,
              101,
              100,
              33,
              34,
              125,
              125
            ]
          },
          "cookie": [],
          "responseTime": 69,
          "responseSize": 232
        },
        "id": "7cb0f3dd-6a60-4b04-bea3-8b25fe1fdea5",
        "assertions": [
          {
            "assertion": "Status code is 200",
            "skipped": false
          },
          {
            "assertion": "Response time for unknown single reqres is less than 1000ms",
            "skipped": false
          }
        ]
      },
      {
        "cursor": {
          "ref": "b0700502-64a6-4bc5-9bda-9ebcd0178851",
          "length": 15,
          "cycles": 1,
          "position": 5,
          "iteration": 0,
          "httpRequestId": "f8289cfd-8ada-448f-be69-b3a295b13613"
        },
        "item": {
          "id": "1a765057-90e7-4a52-8134-eeb5ed32e848",
          "name": "SINGLE <RESOURCE> NOT FOUND",
          "request": {
            "url": {
              "protocol": "https",
              "path": [
                "api",
                "unknown",
                "23"
              ],
              "host": [
                "reqres",
                "in"
              ],
              "query": [],
              "variable": []
            },
            "method": "GET"
          },
          "response": [],
          "event": [
            {
              "listen": "test",
              "script": {
                "id": "017543b6-2eb1-45e8-8f62-52bd59708b36",
                "type": "text/javascript",
                "packages": {},
                "exec": [
                  "pm.test(\"Status code is 404\", function () {\r",
                  "    pm.response.to.have.status(404);\r",
                  "});\r",
                  "pm.test(\"Response time for Reqres resource NOT FOUND is less than 1000ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                  "});\r",
                  "pm.test(\"Data empty\", function () {\r",
                  "    var jsonData = pm.response.json();\r",
                  "    pm.expect(jsonData).to.empty;\r",
                  "});\r",
                  "pm.test(\"Response is empty\", function () {\r",
                  "    pm.expect(pm.response.text()).to.eql('{}');\r",
                  "});"
                ],
                "_lastExecutionId": "b0cd5935-387b-4a38-9875-c3f6cd1e6115"
              }
            }
          ]
        },
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "unknown",
              "23"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "header": [
            {
              "key": "User-Agent",
              "value": "PostmanRuntime/7.37.1",
              "system": true
            },
            {
              "key": "Accept",
              "value": "*/*",
              "system": true
            },
            {
              "key": "Cache-Control",
              "value": "no-cache",
              "system": true
            },
            {
              "key": "Postman-Token",
              "value": "83ff0d0e-7bd4-46ec-8bf2-0ac146802d22",
              "system": true
            },
            {
              "key": "Host",
              "value": "reqres.in",
              "system": true
            },
            {
              "key": "Accept-Encoding",
              "value": "gzip, deflate, br",
              "system": true
            },
            {
              "key": "Connection",
              "value": "keep-alive",
              "system": true
            }
          ],
          "method": "GET"
        },
        "response": {
          "id": "5d2d57a8-66aa-4ca3-8790-c9ab6d27eef6",
          "status": "Not Found",
          "code": 404,
          "header": [
            {
              "key": "Date",
              "value": "Mon, 01 Apr 2024 01:12:49 GMT"
            },
            {
              "key": "Content-Type",
              "value": "application/json; charset=utf-8"
            },
            {
              "key": "Content-Length",
              "value": "2"
            },
            {
              "key": "Connection",
              "value": "keep-alive"
            },
            {
              "key": "Report-To",
              "value": "{\"group\":\"heroku-nel\",\"max_age\":3600,\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?ts=1711933914&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=iorXSeELqHdNb%2F0Qse%2FzuQivBaWD4Em0PSYRV6kZKvg%3D\"}]}"
            },
            {
              "key": "Reporting-Endpoints",
              "value": "heroku-nel=https://nel.heroku.com/reports?ts=1711933914&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=iorXSeELqHdNb%2F0Qse%2FzuQivBaWD4Em0PSYRV6kZKvg%3D"
            },
            {
              "key": "Nel",
              "value": "{\"report_to\":\"heroku-nel\",\"max_age\":3600,\"success_fraction\":0.005,\"failure_fraction\":0.05,\"response_headers\":[\"Via\"]}"
            },
            {
              "key": "X-Powered-By",
              "value": "Express"
            },
            {
              "key": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "key": "Etag",
              "value": "W/\"2-vyGp6PvFo4RvsFtPoIWeCReyIC8\""
            },
            {
              "key": "Via",
              "value": "1.1 vegur"
            },
            {
              "key": "Cache-Control",
              "value": "max-age=14400"
            },
            {
              "key": "CF-Cache-Status",
              "value": "HIT"
            },
            {
              "key": "Age",
              "value": "55"
            },
            {
              "key": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "key": "Server",
              "value": "cloudflare"
            },
            {
              "key": "CF-RAY",
              "value": "86d4b68cbae50daf-MRS"
            }
          ],
          "stream": {
            "type": "Buffer",
            "data": [
              123,
              125
            ]
          },
          "cookie": [],
          "responseTime": 68,
          "responseSize": 2
        },
        "id": "1a765057-90e7-4a52-8134-eeb5ed32e848",
        "assertions": [
          {
            "assertion": "Status code is 404",
            "skipped": false
          },
          {
            "assertion": "Response time for Reqres resource NOT FOUND is less than 1000ms",
            "skipped": false
          },
          {
            "assertion": "Data empty",
            "skipped": false
          },
          {
            "assertion": "Response is empty",
            "skipped": false
          }
        ]
      },
      {
        "cursor": {
          "ref": "bc245d9f-89f5-4945-8ef8-caad6ae583c5",
          "length": 15,
          "cycles": 1,
          "position": 6,
          "iteration": 0,
          "httpRequestId": "14c11a75-52f6-44f7-adf6-0cea9c94dd2d"
        },
        "item": {
          "id": "f0657b10-3978-4d0d-b16b-bc02c43c5a1a",
          "name": "CREATE",
          "request": {
            "url": {
              "protocol": "https",
              "path": [
                "api",
                "users"
              ],
              "host": [
                "reqres",
                "in"
              ],
              "query": [],
              "variable": []
            },
            "method": "POST",
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"name\": \"Tahani\",\r\n    \"job\": \"Engineer\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            }
          },
          "response": [],
          "event": [
            {
              "listen": "test",
              "script": {
                "id": "ee1f3dff-596d-410d-b6da-e34e98466130",
                "type": "text/javascript",
                "packages": {},
                "exec": [
                  "pm.test(\"Status code is 201\", function () {\r",
                  "    pm.response.to.have.status(201);\r",
                  "});\r",
                  "pm.test(\"Response time for create users is less than 1000ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                  "});\r",
                  "pm.test(\"Successful POST request\", function () {\r",
                  "    pm.expect(pm.response.code).to.be.oneOf([201, 202]);\r",
                  "});"
                ],
                "_lastExecutionId": "b0315e8a-060f-4cec-81cc-6eb9c4095088"
              }
            }
          ]
        },
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "users"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "header": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "system": true
            },
            {
              "key": "User-Agent",
              "value": "PostmanRuntime/7.37.1",
              "system": true
            },
            {
              "key": "Accept",
              "value": "*/*",
              "system": true
            },
            {
              "key": "Cache-Control",
              "value": "no-cache",
              "system": true
            },
            {
              "key": "Postman-Token",
              "value": "9b66f0c1-f8de-40a5-9726-45baffe1d29c",
              "system": true
            },
            {
              "key": "Host",
              "value": "reqres.in",
              "system": true
            },
            {
              "key": "Accept-Encoding",
              "value": "gzip, deflate, br",
              "system": true
            },
            {
              "key": "Connection",
              "value": "keep-alive",
              "system": true
            },
            {
              "key": "Content-Length",
              "value": "50",
              "system": true
            }
          ],
          "method": "POST",
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"name\": \"Tahani\",\r\n    \"job\": \"Engineer\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          }
        },
        "response": {
          "id": "451c499f-b792-41b2-ad7b-0d589a19087d",
          "status": "Created",
          "code": 201,
          "header": [
            {
              "key": "Date",
              "value": "Mon, 01 Apr 2024 01:12:49 GMT"
            },
            {
              "key": "Content-Type",
              "value": "application/json; charset=utf-8"
            },
            {
              "key": "Content-Length",
              "value": "84"
            },
            {
              "key": "Connection",
              "value": "keep-alive"
            },
            {
              "key": "Report-To",
              "value": "{\"group\":\"heroku-nel\",\"max_age\":3600,\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?ts=1711933969&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=GaXxMDQ6926mr1nuBMc5ELba%2BetRfwS%2FF30n3NvqUlQ%3D\"}]}"
            },
            {
              "key": "Reporting-Endpoints",
              "value": "heroku-nel=https://nel.heroku.com/reports?ts=1711933969&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=GaXxMDQ6926mr1nuBMc5ELba%2BetRfwS%2FF30n3NvqUlQ%3D"
            },
            {
              "key": "Nel",
              "value": "{\"report_to\":\"heroku-nel\",\"max_age\":3600,\"success_fraction\":0.005,\"failure_fraction\":0.05,\"response_headers\":[\"Via\"]}"
            },
            {
              "key": "X-Powered-By",
              "value": "Express"
            },
            {
              "key": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "key": "Etag",
              "value": "W/\"54-ihmn2eASD0fUb8XKfWBb5jP5FDo\""
            },
            {
              "key": "Via",
              "value": "1.1 vegur"
            },
            {
              "key": "CF-Cache-Status",
              "value": "DYNAMIC"
            },
            {
              "key": "Server",
              "value": "cloudflare"
            },
            {
              "key": "CF-RAY",
              "value": "86d4b68e0c7b0daf-MRS"
            }
          ],
          "stream": {
            "type": "Buffer",
            "data": [
              123,
              34,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              84,
              97,
              104,
              97,
              110,
              105,
              34,
              44,
              34,
              106,
              111,
              98,
              34,
              58,
              34,
              69,
              110,
              103,
              105,
              110,
              101,
              101,
              114,
              34,
              44,
              34,
              105,
              100,
              34,
              58,
              34,
              53,
              54,
              50,
              34,
              44,
              34,
              99,
              114,
              101,
              97,
              116,
              101,
              100,
              65,
              116,
              34,
              58,
              34,
              50,
              48,
              50,
              52,
              45,
              48,
              52,
              45,
              48,
              49,
              84,
              48,
              49,
              58,
              49,
              50,
              58,
              52,
              57,
              46,
              54,
              54,
              48,
              90,
              34,
              125
            ]
          },
          "cookie": [],
          "responseTime": 133,
          "responseSize": 84
        },
        "id": "f0657b10-3978-4d0d-b16b-bc02c43c5a1a",
        "assertions": [
          {
            "assertion": "Status code is 201",
            "skipped": false
          },
          {
            "assertion": "Response time for create users is less than 1000ms",
            "skipped": false
          },
          {
            "assertion": "Successful POST request",
            "skipped": false
          }
        ]
      },
      {
        "cursor": {
          "ref": "82a0ece0-a04a-45cb-80f7-98d106b060cb",
          "length": 15,
          "cycles": 1,
          "position": 7,
          "iteration": 0,
          "httpRequestId": "cc6a20bb-c842-4c36-a891-639fe5d9d9d2"
        },
        "item": {
          "id": "601d8321-05c6-4869-ac9b-65793a02fd1d",
          "name": "UPDATE with PUT",
          "request": {
            "url": {
              "protocol": "https",
              "path": [
                "api",
                "users",
                "2"
              ],
              "host": [
                "reqres",
                "in"
              ],
              "query": [],
              "variable": []
            },
            "method": "PUT",
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"name\": \"morpheus\",\r\n    \"job\": \"zion resident\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            }
          },
          "response": [],
          "event": [
            {
              "listen": "test",
              "script": {
                "id": "84ec054b-3d7b-430c-a2a4-9614ac9e2287",
                "type": "text/javascript",
                "packages": {},
                "exec": [
                  "pm.test(\"Status code is 200\", function () {\r",
                  "    pm.response.to.have.status(200);\r",
                  "});\r",
                  "pm.test(\"Response time for put update users is less than 1000ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                  "});\r",
                  "pm.test(\"Response structure is correct\", function () {\r",
                  "    var jsonData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(jsonData).to.have.property('name');\r",
                  "    pm.expect(jsonData).to.have.property('job');\r",
                  "    pm.expect(jsonData).to.have.property('updatedAt');   \r",
                  "});"
                ],
                "_lastExecutionId": "22a1ccf8-8456-4ad2-8da7-08a1da895022"
              }
            }
          ]
        },
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "users",
              "2"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "header": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "system": true
            },
            {
              "key": "User-Agent",
              "value": "PostmanRuntime/7.37.1",
              "system": true
            },
            {
              "key": "Accept",
              "value": "*/*",
              "system": true
            },
            {
              "key": "Cache-Control",
              "value": "no-cache",
              "system": true
            },
            {
              "key": "Postman-Token",
              "value": "de1d842d-4afc-4b4e-b125-67e462840913",
              "system": true
            },
            {
              "key": "Host",
              "value": "reqres.in",
              "system": true
            },
            {
              "key": "Accept-Encoding",
              "value": "gzip, deflate, br",
              "system": true
            },
            {
              "key": "Connection",
              "value": "keep-alive",
              "system": true
            },
            {
              "key": "Content-Length",
              "value": "57",
              "system": true
            }
          ],
          "method": "PUT",
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"name\": \"morpheus\",\r\n    \"job\": \"zion resident\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          }
        },
        "response": {
          "id": "8031d89f-b1d9-4375-af3a-7d9fcd1a6fc7",
          "status": "OK",
          "code": 200,
          "header": [
            {
              "key": "Date",
              "value": "Mon, 01 Apr 2024 01:12:49 GMT"
            },
            {
              "key": "Content-Type",
              "value": "application/json; charset=utf-8"
            },
            {
              "key": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "key": "Connection",
              "value": "keep-alive"
            },
            {
              "key": "Report-To",
              "value": "{\"group\":\"heroku-nel\",\"max_age\":3600,\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?ts=1711933969&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=GaXxMDQ6926mr1nuBMc5ELba%2BetRfwS%2FF30n3NvqUlQ%3D\"}]}"
            },
            {
              "key": "Reporting-Endpoints",
              "value": "heroku-nel=https://nel.heroku.com/reports?ts=1711933969&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=GaXxMDQ6926mr1nuBMc5ELba%2BetRfwS%2FF30n3NvqUlQ%3D"
            },
            {
              "key": "Nel",
              "value": "{\"report_to\":\"heroku-nel\",\"max_age\":3600,\"success_fraction\":0.005,\"failure_fraction\":0.05,\"response_headers\":[\"Via\"]}"
            },
            {
              "key": "X-Powered-By",
              "value": "Express"
            },
            {
              "key": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "key": "Etag",
              "value": "W/\"50-RUEWfNYYcCcitzNh1U3mdCtmGLI\""
            },
            {
              "key": "Via",
              "value": "1.1 vegur"
            },
            {
              "key": "CF-Cache-Status",
              "value": "DYNAMIC"
            },
            {
              "key": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "key": "Server",
              "value": "cloudflare"
            },
            {
              "key": "CF-RAY",
              "value": "86d4b68f0ded0daf-MRS"
            },
            {
              "key": "Content-Encoding",
              "value": "br"
            }
          ],
          "stream": {
            "type": "Buffer",
            "data": [
              123,
              34,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              109,
              111,
              114,
              112,
              104,
              101,
              117,
              115,
              34,
              44,
              34,
              106,
              111,
              98,
              34,
              58,
              34,
              122,
              105,
              111,
              110,
              32,
              114,
              101,
              115,
              105,
              100,
              101,
              110,
              116,
              34,
              44,
              34,
              117,
              112,
              100,
              97,
              116,
              101,
              100,
              65,
              116,
              34,
              58,
              34,
              50,
              48,
              50,
              52,
              45,
              48,
              52,
              45,
              48,
              49,
              84,
              48,
              49,
              58,
              49,
              50,
              58,
              52,
              57,
              46,
              56,
              51,
              48,
              90,
              34,
              125
            ]
          },
          "cookie": [],
          "responseTime": 137,
          "responseSize": 80
        },
        "id": "601d8321-05c6-4869-ac9b-65793a02fd1d",
        "assertions": [
          {
            "assertion": "Status code is 200",
            "skipped": false
          },
          {
            "assertion": "Response time for put update users is less than 1000ms",
            "skipped": false
          },
          {
            "assertion": "Response structure is correct",
            "skipped": false
          }
        ]
      },
      {
        "cursor": {
          "ref": "4552099d-cf0c-4ec8-b305-7349de3555ea",
          "length": 15,
          "cycles": 1,
          "position": 8,
          "iteration": 0,
          "httpRequestId": "ead08fb7-4c20-444a-b6c7-470b37fd2945"
        },
        "item": {
          "id": "4fa82749-d771-4854-9ad1-d5468f017971",
          "name": "UPDATE with PATCH",
          "request": {
            "url": {
              "protocol": "https",
              "path": [
                "api",
                "users",
                "2"
              ],
              "host": [
                "reqres",
                "in"
              ],
              "query": [],
              "variable": []
            },
            "method": "PATCH",
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"name\": \"morpheus\",\r\n    \"job\": \"zion resident\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            }
          },
          "response": [],
          "event": [
            {
              "listen": "test",
              "script": {
                "id": "868206ce-2c80-473d-a756-05818015f749",
                "type": "text/javascript",
                "packages": {},
                "exec": [
                  "pm.test(\"Status code is 200\", function () {\r",
                  "    pm.response.to.have.status(200);\r",
                  "});\r",
                  "pm.test(\"Response time for patch user is less than 1000ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                  "});"
                ],
                "_lastExecutionId": "59158a54-085b-43da-82c7-2320270b8132"
              }
            }
          ]
        },
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "users",
              "2"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "header": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "system": true
            },
            {
              "key": "User-Agent",
              "value": "PostmanRuntime/7.37.1",
              "system": true
            },
            {
              "key": "Accept",
              "value": "*/*",
              "system": true
            },
            {
              "key": "Cache-Control",
              "value": "no-cache",
              "system": true
            },
            {
              "key": "Postman-Token",
              "value": "0cb8f9e1-60e0-4218-bc70-0e1dc378c522",
              "system": true
            },
            {
              "key": "Host",
              "value": "reqres.in",
              "system": true
            },
            {
              "key": "Accept-Encoding",
              "value": "gzip, deflate, br",
              "system": true
            },
            {
              "key": "Connection",
              "value": "keep-alive",
              "system": true
            },
            {
              "key": "Content-Length",
              "value": "57",
              "system": true
            }
          ],
          "method": "PATCH",
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"name\": \"morpheus\",\r\n    \"job\": \"zion resident\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          }
        },
        "response": {
          "id": "80decdb1-ef2d-4dfc-9a68-5989d75b7f0f",
          "status": "OK",
          "code": 200,
          "header": [
            {
              "key": "Date",
              "value": "Mon, 01 Apr 2024 01:12:50 GMT"
            },
            {
              "key": "Content-Type",
              "value": "application/json; charset=utf-8"
            },
            {
              "key": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "key": "Connection",
              "value": "keep-alive"
            },
            {
              "key": "Report-To",
              "value": "{\"group\":\"heroku-nel\",\"max_age\":3600,\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?ts=1711933969&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=GaXxMDQ6926mr1nuBMc5ELba%2BetRfwS%2FF30n3NvqUlQ%3D\"}]}"
            },
            {
              "key": "Reporting-Endpoints",
              "value": "heroku-nel=https://nel.heroku.com/reports?ts=1711933969&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=GaXxMDQ6926mr1nuBMc5ELba%2BetRfwS%2FF30n3NvqUlQ%3D"
            },
            {
              "key": "Nel",
              "value": "{\"report_to\":\"heroku-nel\",\"max_age\":3600,\"success_fraction\":0.005,\"failure_fraction\":0.05,\"response_headers\":[\"Via\"]}"
            },
            {
              "key": "X-Powered-By",
              "value": "Express"
            },
            {
              "key": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "key": "Etag",
              "value": "W/\"50-4T8hz3ETG0MF0B+AlvqEyNlyN1s\""
            },
            {
              "key": "Via",
              "value": "1.1 vegur"
            },
            {
              "key": "CF-Cache-Status",
              "value": "DYNAMIC"
            },
            {
              "key": "Server",
              "value": "cloudflare"
            },
            {
              "key": "CF-RAY",
              "value": "86d4b6902f4e0daf-MRS"
            },
            {
              "key": "Content-Encoding",
              "value": "br"
            }
          ],
          "stream": {
            "type": "Buffer",
            "data": [
              123,
              34,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              109,
              111,
              114,
              112,
              104,
              101,
              117,
              115,
              34,
              44,
              34,
              106,
              111,
              98,
              34,
              58,
              34,
              122,
              105,
              111,
              110,
              32,
              114,
              101,
              115,
              105,
              100,
              101,
              110,
              116,
              34,
              44,
              34,
              117,
              112,
              100,
              97,
              116,
              101,
              100,
              65,
              116,
              34,
              58,
              34,
              50,
              48,
              50,
              52,
              45,
              48,
              52,
              45,
              48,
              49,
              84,
              48,
              49,
              58,
              49,
              50,
              58,
              52,
              57,
              46,
              57,
              57,
              54,
              90,
              34,
              125
            ]
          },
          "cookie": [],
          "responseTime": 135,
          "responseSize": 80
        },
        "id": "4fa82749-d771-4854-9ad1-d5468f017971",
        "assertions": [
          {
            "assertion": "Status code is 200",
            "skipped": false
          },
          {
            "assertion": "Response time for patch user is less than 1000ms",
            "skipped": false
          }
        ]
      },
      {
        "cursor": {
          "ref": "d39e48ce-9e2d-4565-9e77-c7cb81fd5299",
          "length": 15,
          "cycles": 1,
          "position": 9,
          "iteration": 0,
          "httpRequestId": "1d60fa2b-9ca0-4ae4-9402-5df722dfae5d"
        },
        "item": {
          "id": "8966946a-b7f5-4658-91af-2174033e9fe8",
          "name": "DELETE",
          "request": {
            "url": {
              "protocol": "https",
              "path": [
                "api",
                "users",
                "2"
              ],
              "host": [
                "reqres",
                "in"
              ],
              "query": [],
              "variable": []
            },
            "method": "DELETE"
          },
          "response": [],
          "event": [
            {
              "listen": "test",
              "script": {
                "id": "11aeb5a0-86fc-4d33-a4c8-d0a42ee8cfab",
                "type": "text/javascript",
                "packages": {},
                "exec": [
                  "pm.test(\"Status code is 204\", function () {\r",
                  "    pm.response.to.have.status(204);\r",
                  "});\r",
                  "pm.test(\"Response time for DELETE USER is less than 1000ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                  "});\r",
                  "pm.test(\"Response body is empty\", function () {\r",
                  "    pm.expect(pm.response.text()).to.eql('');\r",
                  "});\r",
                  ""
                ],
                "_lastExecutionId": "94f412f2-ad1c-4970-88bb-a177b403bfbc"
              }
            }
          ]
        },
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "users",
              "2"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "header": [
            {
              "key": "User-Agent",
              "value": "PostmanRuntime/7.37.1",
              "system": true
            },
            {
              "key": "Accept",
              "value": "*/*",
              "system": true
            },
            {
              "key": "Cache-Control",
              "value": "no-cache",
              "system": true
            },
            {
              "key": "Postman-Token",
              "value": "c417c4f7-6473-4497-a0e3-487196e474b8",
              "system": true
            },
            {
              "key": "Host",
              "value": "reqres.in",
              "system": true
            },
            {
              "key": "Accept-Encoding",
              "value": "gzip, deflate, br",
              "system": true
            },
            {
              "key": "Connection",
              "value": "keep-alive",
              "system": true
            }
          ],
          "method": "DELETE"
        },
        "response": {
          "id": "295ef939-c56f-4408-aea9-722a0f94e674",
          "status": "No Content",
          "code": 204,
          "header": [
            {
              "key": "Date",
              "value": "Mon, 01 Apr 2024 01:12:50 GMT"
            },
            {
              "key": "Content-Length",
              "value": "0"
            },
            {
              "key": "Connection",
              "value": "keep-alive"
            },
            {
              "key": "Report-To",
              "value": "{\"group\":\"heroku-nel\",\"max_age\":3600,\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?ts=1711933970&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=HR5l4aRbcV%2BhQ8raepzFSsVQDlYsTP1bttGfQQpeXAI%3D\"}]}"
            },
            {
              "key": "Reporting-Endpoints",
              "value": "heroku-nel=https://nel.heroku.com/reports?ts=1711933970&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=HR5l4aRbcV%2BhQ8raepzFSsVQDlYsTP1bttGfQQpeXAI%3D"
            },
            {
              "key": "Nel",
              "value": "{\"report_to\":\"heroku-nel\",\"max_age\":3600,\"success_fraction\":0.005,\"failure_fraction\":0.05,\"response_headers\":[\"Via\"]}"
            },
            {
              "key": "X-Powered-By",
              "value": "Express"
            },
            {
              "key": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "key": "Etag",
              "value": "W/\"2-vyGp6PvFo4RvsFtPoIWeCReyIC8\""
            },
            {
              "key": "Via",
              "value": "1.1 vegur"
            },
            {
              "key": "CF-Cache-Status",
              "value": "DYNAMIC"
            },
            {
              "key": "Server",
              "value": "cloudflare"
            },
            {
              "key": "CF-RAY",
              "value": "86d4b69168fe0daf-MRS"
            }
          ],
          "stream": {
            "type": "Buffer",
            "data": []
          },
          "cookie": [],
          "responseTime": 130,
          "responseSize": 0
        },
        "id": "8966946a-b7f5-4658-91af-2174033e9fe8",
        "assertions": [
          {
            "assertion": "Status code is 204",
            "skipped": false
          },
          {
            "assertion": "Response time for DELETE USER is less than 1000ms",
            "skipped": false
          },
          {
            "assertion": "Response body is empty",
            "skipped": false
          }
        ]
      },
      {
        "cursor": {
          "ref": "bd90a3d5-2d5c-4e4c-abeb-2b4bb4df85bf",
          "length": 15,
          "cycles": 1,
          "position": 10,
          "iteration": 0,
          "httpRequestId": "d9fbb986-67b3-4366-b701-feb487225c59"
        },
        "item": {
          "id": "84aeddc2-0943-4495-8aca-3a551d985cec",
          "name": "REGISTER - SUCCESSFUL",
          "request": {
            "url": {
              "protocol": "https",
              "path": [
                "api",
                "register"
              ],
              "host": [
                "reqres",
                "in"
              ],
              "query": [],
              "variable": []
            },
            "method": "POST",
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"email\": \"eve.holt@reqres.in\",\r\n    \"password\": \"pistol\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            }
          },
          "response": [],
          "event": [
            {
              "listen": "test",
              "script": {
                "id": "171e83fc-18a7-43b5-a206-16e8bff6ce68",
                "type": "text/javascript",
                "packages": {},
                "exec": [
                  "pm.test(\"Status code is 200\", function () {\r",
                  "    pm.response.to.have.status(200);\r",
                  "});\r",
                  "pm.test(\"Response time for REGISTER - SUCCESSFUL is less than 1000ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                  "});\r",
                  "pm.test(\"token register\", function () {\r",
                  "    var jsonData = pm.response.json();\r",
                  "    pm.expect(jsonData.token).to.eql(\"QpwL5tke4Pnpja7X4\");\r",
                  "});"
                ],
                "_lastExecutionId": "d2bc04ee-9c1e-4ed2-9c90-e46e451762ea"
              }
            }
          ]
        },
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "register"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "header": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "system": true
            },
            {
              "key": "User-Agent",
              "value": "PostmanRuntime/7.37.1",
              "system": true
            },
            {
              "key": "Accept",
              "value": "*/*",
              "system": true
            },
            {
              "key": "Cache-Control",
              "value": "no-cache",
              "system": true
            },
            {
              "key": "Postman-Token",
              "value": "c87d9e15-a82c-48ac-96b0-a3fddd95bae3",
              "system": true
            },
            {
              "key": "Host",
              "value": "reqres.in",
              "system": true
            },
            {
              "key": "Accept-Encoding",
              "value": "gzip, deflate, br",
              "system": true
            },
            {
              "key": "Connection",
              "value": "keep-alive",
              "system": true
            },
            {
              "key": "Content-Length",
              "value": "66",
              "system": true
            }
          ],
          "method": "POST",
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"email\": \"eve.holt@reqres.in\",\r\n    \"password\": \"pistol\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          }
        },
        "response": {
          "id": "7157571d-0413-4c0a-b969-0985ebd32b8c",
          "status": "OK",
          "code": 200,
          "header": [
            {
              "key": "Date",
              "value": "Mon, 01 Apr 2024 01:12:50 GMT"
            },
            {
              "key": "Content-Type",
              "value": "application/json; charset=utf-8"
            },
            {
              "key": "Content-Length",
              "value": "36"
            },
            {
              "key": "Connection",
              "value": "keep-alive"
            },
            {
              "key": "Report-To",
              "value": "{\"group\":\"heroku-nel\",\"max_age\":3600,\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?ts=1711933970&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=HR5l4aRbcV%2BhQ8raepzFSsVQDlYsTP1bttGfQQpeXAI%3D\"}]}"
            },
            {
              "key": "Reporting-Endpoints",
              "value": "heroku-nel=https://nel.heroku.com/reports?ts=1711933970&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=HR5l4aRbcV%2BhQ8raepzFSsVQDlYsTP1bttGfQQpeXAI%3D"
            },
            {
              "key": "Nel",
              "value": "{\"report_to\":\"heroku-nel\",\"max_age\":3600,\"success_fraction\":0.005,\"failure_fraction\":0.05,\"response_headers\":[\"Via\"]}"
            },
            {
              "key": "X-Powered-By",
              "value": "Express"
            },
            {
              "key": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "key": "Etag",
              "value": "W/\"24-4iP0za1geN2he+ohu8F0FhCjLks\""
            },
            {
              "key": "Via",
              "value": "1.1 vegur"
            },
            {
              "key": "CF-Cache-Status",
              "value": "DYNAMIC"
            },
            {
              "key": "Server",
              "value": "cloudflare"
            },
            {
              "key": "CF-RAY",
              "value": "86d4b6926a750daf-MRS"
            }
          ],
          "stream": {
            "type": "Buffer",
            "data": [
              123,
              34,
              105,
              100,
              34,
              58,
              52,
              44,
              34,
              116,
              111,
              107,
              101,
              110,
              34,
              58,
              34,
              81,
              112,
              119,
              76,
              53,
              116,
              107,
              101,
              52,
              80,
              110,
              112,
              106,
              97,
              55,
              88,
              52,
              34,
              125
            ]
          },
          "cookie": [],
          "responseTime": 131,
          "responseSize": 36
        },
        "id": "84aeddc2-0943-4495-8aca-3a551d985cec",
        "assertions": [
          {
            "assertion": "Status code is 200",
            "skipped": false
          },
          {
            "assertion": "Response time for REGISTER - SUCCESSFUL is less than 1000ms",
            "skipped": false
          },
          {
            "assertion": "token register",
            "skipped": false
          }
        ]
      },
      {
        "cursor": {
          "ref": "0af98c6f-341f-4223-9144-4189c05653a4",
          "length": 15,
          "cycles": 1,
          "position": 11,
          "iteration": 0,
          "httpRequestId": "0794e753-7860-45e0-abbd-1887259fea42"
        },
        "item": {
          "id": "5b633d98-f03c-4727-bebe-856ac96cdaa4",
          "name": "REGISTER - UNSUCCESSFUL",
          "request": {
            "url": {
              "protocol": "https",
              "path": [
                "api",
                "register"
              ],
              "host": [
                "reqres",
                "in"
              ],
              "query": [],
              "variable": []
            },
            "method": "POST",
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"email\": \"sydney@fife\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            }
          },
          "response": [],
          "event": [
            {
              "listen": "test",
              "script": {
                "id": "40a93c41-333c-4291-a9b4-80d718a583b9",
                "type": "text/javascript",
                "packages": {},
                "exec": [
                  "pm.test(\"Status code is 400\", function () {\r",
                  "    pm.response.to.have.status(400);\r",
                  "});\r",
                  "pm.test(\"Response time for REGISTER - UNSUCCESSFUL is less than 1000ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                  "});\r",
                  "pm.test(\"Response contains expected error message\", function () {\r",
                  "    var jsonData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(jsonData).to.have.property('error');\r",
                  "    pm.expect(jsonData.error).to.eql('Missing password');\r",
                  "});\r",
                  ""
                ],
                "_lastExecutionId": "3668faf0-0d85-4120-8041-85922f04e647"
              }
            }
          ]
        },
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "register"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "header": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "system": true
            },
            {
              "key": "User-Agent",
              "value": "PostmanRuntime/7.37.1",
              "system": true
            },
            {
              "key": "Accept",
              "value": "*/*",
              "system": true
            },
            {
              "key": "Cache-Control",
              "value": "no-cache",
              "system": true
            },
            {
              "key": "Postman-Token",
              "value": "59803d3d-6a69-4988-96be-dfcc5479b7dc",
              "system": true
            },
            {
              "key": "Host",
              "value": "reqres.in",
              "system": true
            },
            {
              "key": "Accept-Encoding",
              "value": "gzip, deflate, br",
              "system": true
            },
            {
              "key": "Connection",
              "value": "keep-alive",
              "system": true
            },
            {
              "key": "Content-Length",
              "value": "32",
              "system": true
            }
          ],
          "method": "POST",
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"email\": \"sydney@fife\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          }
        },
        "response": {
          "id": "a00a2d69-afc2-440a-b103-70e64a665dc4",
          "status": "Bad Request",
          "code": 400,
          "header": [
            {
              "key": "Date",
              "value": "Mon, 01 Apr 2024 01:12:50 GMT"
            },
            {
              "key": "Content-Type",
              "value": "application/json; charset=utf-8"
            },
            {
              "key": "Content-Length",
              "value": "28"
            },
            {
              "key": "Connection",
              "value": "keep-alive"
            },
            {
              "key": "Report-To",
              "value": "{\"group\":\"heroku-nel\",\"max_age\":3600,\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?ts=1711933970&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=HR5l4aRbcV%2BhQ8raepzFSsVQDlYsTP1bttGfQQpeXAI%3D\"}]}"
            },
            {
              "key": "Reporting-Endpoints",
              "value": "heroku-nel=https://nel.heroku.com/reports?ts=1711933970&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=HR5l4aRbcV%2BhQ8raepzFSsVQDlYsTP1bttGfQQpeXAI%3D"
            },
            {
              "key": "Nel",
              "value": "{\"report_to\":\"heroku-nel\",\"max_age\":3600,\"success_fraction\":0.005,\"failure_fraction\":0.05,\"response_headers\":[\"Via\"]}"
            },
            {
              "key": "X-Powered-By",
              "value": "Express"
            },
            {
              "key": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "key": "Etag",
              "value": "W/\"1c-NmpazMScs9tOqR7eDEesn+pqC9Q\""
            },
            {
              "key": "Via",
              "value": "1.1 vegur"
            },
            {
              "key": "CF-Cache-Status",
              "value": "DYNAMIC"
            },
            {
              "key": "Server",
              "value": "cloudflare"
            },
            {
              "key": "CF-RAY",
              "value": "86d4b693fc790daf-MRS"
            }
          ],
          "stream": {
            "type": "Buffer",
            "data": [
              123,
              34,
              101,
              114,
              114,
              111,
              114,
              34,
              58,
              34,
              77,
              105,
              115,
              115,
              105,
              110,
              103,
              32,
              112,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              34,
              125
            ]
          },
          "cookie": [],
          "responseTime": 126,
          "responseSize": 28
        },
        "id": "5b633d98-f03c-4727-bebe-856ac96cdaa4",
        "assertions": [
          {
            "assertion": "Status code is 400",
            "skipped": false
          },
          {
            "assertion": "Response time for REGISTER - UNSUCCESSFUL is less than 1000ms",
            "skipped": false
          },
          {
            "assertion": "Response contains expected error message",
            "skipped": false
          }
        ]
      },
      {
        "cursor": {
          "ref": "37e41317-d751-468d-81d4-51a125926cc7",
          "length": 15,
          "cycles": 1,
          "position": 12,
          "iteration": 0,
          "httpRequestId": "e10009c0-91a9-442b-9d22-2a2348e4af14"
        },
        "item": {
          "id": "aaf2e5b1-17ea-4553-8961-b29294876834",
          "name": "LOGIN - SUCCESSFUL",
          "request": {
            "url": {
              "protocol": "https",
              "path": [
                "api",
                "login"
              ],
              "host": [
                "reqres",
                "in"
              ],
              "query": [],
              "variable": []
            },
            "method": "POST",
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"email\": \"eve.holt@reqres.in\",\r\n    \"password\": \"cityslicka\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            }
          },
          "response": [],
          "event": [
            {
              "listen": "test",
              "script": {
                "id": "d011c17a-578d-4b4b-b156-02d94057eb86",
                "type": "text/javascript",
                "packages": {},
                "exec": [
                  "pm.test(\"Status code is 200\", function () {\r",
                  "    pm.response.to.have.status(200);\r",
                  "});\r",
                  "pm.test(\"Response time for LOGIN - SUCCESSFUL is less than 1000ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                  "});\r",
                  "pm.test(\"token login\", function () {\r",
                  "    var jsonData = pm.response.json();\r",
                  "    pm.expect(jsonData.token).to.eql(\"QpwL5tke4Pnpja7X4\");\r",
                  "});"
                ],
                "_lastExecutionId": "d0c98044-ea28-416c-b795-ccd3fa6b1395"
              }
            }
          ]
        },
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "login"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "header": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "system": true
            },
            {
              "key": "User-Agent",
              "value": "PostmanRuntime/7.37.1",
              "system": true
            },
            {
              "key": "Accept",
              "value": "*/*",
              "system": true
            },
            {
              "key": "Cache-Control",
              "value": "no-cache",
              "system": true
            },
            {
              "key": "Postman-Token",
              "value": "ba3f5445-b8de-45f5-82ce-7e63ef1696f9",
              "system": true
            },
            {
              "key": "Host",
              "value": "reqres.in",
              "system": true
            },
            {
              "key": "Accept-Encoding",
              "value": "gzip, deflate, br",
              "system": true
            },
            {
              "key": "Connection",
              "value": "keep-alive",
              "system": true
            },
            {
              "key": "Content-Length",
              "value": "70",
              "system": true
            }
          ],
          "method": "POST",
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"email\": \"eve.holt@reqres.in\",\r\n    \"password\": \"cityslicka\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          }
        },
        "response": {
          "id": "005af894-cb84-42a6-85e6-f697b394d76d",
          "status": "OK",
          "code": 200,
          "header": [
            {
              "key": "Date",
              "value": "Mon, 01 Apr 2024 01:12:50 GMT"
            },
            {
              "key": "Content-Type",
              "value": "application/json; charset=utf-8"
            },
            {
              "key": "Content-Length",
              "value": "29"
            },
            {
              "key": "Connection",
              "value": "keep-alive"
            },
            {
              "key": "Report-To",
              "value": "{\"group\":\"heroku-nel\",\"max_age\":3600,\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?ts=1711933970&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=HR5l4aRbcV%2BhQ8raepzFSsVQDlYsTP1bttGfQQpeXAI%3D\"}]}"
            },
            {
              "key": "Reporting-Endpoints",
              "value": "heroku-nel=https://nel.heroku.com/reports?ts=1711933970&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=HR5l4aRbcV%2BhQ8raepzFSsVQDlYsTP1bttGfQQpeXAI%3D"
            },
            {
              "key": "Nel",
              "value": "{\"report_to\":\"heroku-nel\",\"max_age\":3600,\"success_fraction\":0.005,\"failure_fraction\":0.05,\"response_headers\":[\"Via\"]}"
            },
            {
              "key": "X-Powered-By",
              "value": "Express"
            },
            {
              "key": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "key": "Etag",
              "value": "W/\"1d-lGCrvD6B7Qzk11+2C98+nGhhuec\""
            },
            {
              "key": "Via",
              "value": "1.1 vegur"
            },
            {
              "key": "CF-Cache-Status",
              "value": "DYNAMIC"
            },
            {
              "key": "Server",
              "value": "cloudflare"
            },
            {
              "key": "CF-RAY",
              "value": "86d4b694fde40daf-MRS"
            }
          ],
          "stream": {
            "type": "Buffer",
            "data": [
              123,
              34,
              116,
              111,
              107,
              101,
              110,
              34,
              58,
              34,
              81,
              112,
              119,
              76,
              53,
              116,
              107,
              101,
              52,
              80,
              110,
              112,
              106,
              97,
              55,
              88,
              52,
              34,
              125
            ]
          },
          "cookie": [],
          "responseTime": 128,
          "responseSize": 29
        },
        "id": "aaf2e5b1-17ea-4553-8961-b29294876834",
        "assertions": [
          {
            "assertion": "Status code is 200",
            "skipped": false
          },
          {
            "assertion": "Response time for LOGIN - SUCCESSFUL is less than 1000ms",
            "skipped": false
          },
          {
            "assertion": "token login",
            "skipped": false
          }
        ]
      },
      {
        "cursor": {
          "ref": "e44d95a5-1f7b-4919-bd0f-aa69e16625df",
          "length": 15,
          "cycles": 1,
          "position": 13,
          "iteration": 0,
          "httpRequestId": "447536e2-a189-420d-93ce-65e28e757b8d"
        },
        "item": {
          "id": "4d07ff0f-abc5-4d4f-a31a-9530a824175a",
          "name": "LOGIN - UNSUCCESSFUL",
          "request": {
            "url": {
              "protocol": "https",
              "path": [
                "api",
                "login"
              ],
              "host": [
                "reqres",
                "in"
              ],
              "query": [],
              "variable": []
            },
            "method": "POST",
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"email\": \"peter@klaven\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            }
          },
          "response": [],
          "event": [
            {
              "listen": "test",
              "script": {
                "id": "e6eaa34f-26c6-4142-aa5b-a9655a64c46e",
                "type": "text/javascript",
                "packages": {},
                "exec": [
                  "pm.test(\"Status code is 400\", function () {\r",
                  "    pm.response.to.have.status(400);\r",
                  "});\r",
                  "pm.test(\"Response time for LOGIN - UNSUCCESSFUL is less than 1000ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(1000);\r",
                  "});\r",
                  "pm.test(\"Response contains expected error message\", function () {\r",
                  "    var jsonData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(jsonData).to.have.property('error');\r",
                  "    pm.expect(jsonData.error).to.eql('Missing password');\r",
                  "});\r",
                  ""
                ],
                "_lastExecutionId": "0932f7e2-7131-434e-8e06-4b42dd452f1e"
              }
            }
          ]
        },
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "login"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [],
            "variable": []
          },
          "header": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "system": true
            },
            {
              "key": "User-Agent",
              "value": "PostmanRuntime/7.37.1",
              "system": true
            },
            {
              "key": "Accept",
              "value": "*/*",
              "system": true
            },
            {
              "key": "Cache-Control",
              "value": "no-cache",
              "system": true
            },
            {
              "key": "Postman-Token",
              "value": "99a00254-5f83-41d3-9c3d-d2a41e2479a8",
              "system": true
            },
            {
              "key": "Host",
              "value": "reqres.in",
              "system": true
            },
            {
              "key": "Accept-Encoding",
              "value": "gzip, deflate, br",
              "system": true
            },
            {
              "key": "Connection",
              "value": "keep-alive",
              "system": true
            },
            {
              "key": "Content-Length",
              "value": "33",
              "system": true
            }
          ],
          "method": "POST",
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"email\": \"peter@klaven\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          }
        },
        "response": {
          "id": "4957200f-9aa7-4ec7-8999-ae72706acbed",
          "status": "Bad Request",
          "code": 400,
          "header": [
            {
              "key": "Date",
              "value": "Mon, 01 Apr 2024 01:12:50 GMT"
            },
            {
              "key": "Content-Type",
              "value": "application/json; charset=utf-8"
            },
            {
              "key": "Content-Length",
              "value": "28"
            },
            {
              "key": "Connection",
              "value": "keep-alive"
            },
            {
              "key": "Report-To",
              "value": "{\"group\":\"heroku-nel\",\"max_age\":3600,\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?ts=1711933970&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=HR5l4aRbcV%2BhQ8raepzFSsVQDlYsTP1bttGfQQpeXAI%3D\"}]}"
            },
            {
              "key": "Reporting-Endpoints",
              "value": "heroku-nel=https://nel.heroku.com/reports?ts=1711933970&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=HR5l4aRbcV%2BhQ8raepzFSsVQDlYsTP1bttGfQQpeXAI%3D"
            },
            {
              "key": "Nel",
              "value": "{\"report_to\":\"heroku-nel\",\"max_age\":3600,\"success_fraction\":0.005,\"failure_fraction\":0.05,\"response_headers\":[\"Via\"]}"
            },
            {
              "key": "X-Powered-By",
              "value": "Express"
            },
            {
              "key": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "key": "Etag",
              "value": "W/\"1c-NmpazMScs9tOqR7eDEesn+pqC9Q\""
            },
            {
              "key": "Via",
              "value": "1.1 vegur"
            },
            {
              "key": "CF-Cache-Status",
              "value": "DYNAMIC"
            },
            {
              "key": "Server",
              "value": "cloudflare"
            },
            {
              "key": "CF-RAY",
              "value": "86d4b695ff300daf-MRS"
            }
          ],
          "stream": {
            "type": "Buffer",
            "data": [
              123,
              34,
              101,
              114,
              114,
              111,
              114,
              34,
              58,
              34,
              77,
              105,
              115,
              115,
              105,
              110,
              103,
              32,
              112,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              34,
              125
            ]
          },
          "cookie": [],
          "responseTime": 153,
          "responseSize": 28
        },
        "id": "4d07ff0f-abc5-4d4f-a31a-9530a824175a",
        "assertions": [
          {
            "assertion": "Status code is 400",
            "skipped": false
          },
          {
            "assertion": "Response time for LOGIN - UNSUCCESSFUL is less than 1000ms",
            "skipped": false
          },
          {
            "assertion": "Response contains expected error message",
            "skipped": false
          }
        ]
      },
      {
        "cursor": {
          "ref": "dcdfe544-379d-45ce-b413-ac8895425232",
          "length": 15,
          "cycles": 1,
          "position": 14,
          "iteration": 0,
          "httpRequestId": "f71549a1-5460-4d9a-b83b-d0473b5734bf"
        },
        "item": {
          "id": "34dc4f59-bfbc-4969-b6c7-d199ef343f40",
          "name": "DELAYED RESPONSE",
          "request": {
            "url": {
              "protocol": "https",
              "path": [
                "api",
                "users"
              ],
              "host": [
                "reqres",
                "in"
              ],
              "query": [
                {
                  "key": "delay",
                  "value": "3"
                }
              ],
              "variable": []
            },
            "method": "GET"
          },
          "response": [],
          "event": [
            {
              "listen": "test",
              "script": {
                "id": "e260573c-cc8c-4599-8fb5-120c66c9fc2a",
                "type": "text/javascript",
                "packages": {},
                "exec": [
                  "pm.test(\"Status code is 200\", function () {\r",
                  "    pm.response.to.have.status(200);\r",
                  "});\r",
                  "pm.test(\"Response time for DELAYED RESPONSE is less than 4000ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(4000);\r",
                  "});\r",
                  "pm.test(\"Verify support text\", function () {\r",
                  "    var jsonData = pm.response.json();\r",
                  "    pm.expect(jsonData.support.text).to.eql(\"To keep ReqRes free, contributions towards server costs are appreciated!\");\r",
                  "});"
                ],
                "_lastExecutionId": "a5185117-a9c9-47db-b2a9-9a8714d5fa67"
              }
            }
          ]
        },
        "request": {
          "url": {
            "protocol": "https",
            "path": [
              "api",
              "users"
            ],
            "host": [
              "reqres",
              "in"
            ],
            "query": [
              {
                "key": "delay",
                "value": "3"
              }
            ],
            "variable": []
          },
          "header": [
            {
              "key": "User-Agent",
              "value": "PostmanRuntime/7.37.1",
              "system": true
            },
            {
              "key": "Accept",
              "value": "*/*",
              "system": true
            },
            {
              "key": "Cache-Control",
              "value": "no-cache",
              "system": true
            },
            {
              "key": "Postman-Token",
              "value": "f789689a-522c-44ef-a02b-6d7ec10bc479",
              "system": true
            },
            {
              "key": "Host",
              "value": "reqres.in",
              "system": true
            },
            {
              "key": "Accept-Encoding",
              "value": "gzip, deflate, br",
              "system": true
            },
            {
              "key": "Connection",
              "value": "keep-alive",
              "system": true
            }
          ],
          "method": "GET"
        },
        "response": {
          "id": "8d4090dd-3966-4a1f-9238-63d2c370f707",
          "status": "OK",
          "code": 200,
          "header": [
            {
              "key": "Date",
              "value": "Mon, 01 Apr 2024 01:12:54 GMT"
            },
            {
              "key": "Content-Type",
              "value": "application/json; charset=utf-8"
            },
            {
              "key": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "key": "Connection",
              "value": "keep-alive"
            },
            {
              "key": "Report-To",
              "value": "{\"group\":\"heroku-nel\",\"max_age\":3600,\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?ts=1711933971&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=R9ik1nZq4k0%2BWimSSzdxWPwkJ8Wy9eLLMwspbw%2BqZaE%3D\"}]}"
            },
            {
              "key": "Reporting-Endpoints",
              "value": "heroku-nel=https://nel.heroku.com/reports?ts=1711933971&sid=c4c9725f-1ab0-44d8-820f-430df2718e11&s=R9ik1nZq4k0%2BWimSSzdxWPwkJ8Wy9eLLMwspbw%2BqZaE%3D"
            },
            {
              "key": "Nel",
              "value": "{\"report_to\":\"heroku-nel\",\"max_age\":3600,\"success_fraction\":0.005,\"failure_fraction\":0.05,\"response_headers\":[\"Via\"]}"
            },
            {
              "key": "X-Powered-By",
              "value": "Express"
            },
            {
              "key": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "key": "Etag",
              "value": "W/\"3e4-2RLXvr5wTg9YQ6aH95CkYoFNuO8\""
            },
            {
              "key": "Via",
              "value": "1.1 vegur"
            },
            {
              "key": "CF-Cache-Status",
              "value": "DYNAMIC"
            },
            {
              "key": "Server",
              "value": "cloudflare"
            },
            {
              "key": "CF-RAY",
              "value": "86d4b697694a0daf-MRS"
            },
            {
              "key": "Content-Encoding",
              "value": "br"
            }
          ],
          "stream": {
            "type": "Buffer",
            "data": [
              123,
              34,
              112,
              97,
              103,
              101,
              34,
              58,
              49,
              44,
              34,
              112,
              101,
              114,
              95,
              112,
              97,
              103,
              101,
              34,
              58,
              54,
              44,
              34,
              116,
              111,
              116,
              97,
              108,
              34,
              58,
              49,
              50,
              44,
              34,
              116,
              111,
              116,
              97,
              108,
              95,
              112,
              97,
              103,
              101,
              115,
              34,
              58,
              50,
              44,
              34,
              100,
              97,
              116,
              97,
              34,
              58,
              91,
              123,
              34,
              105,
              100,
              34,
              58,
              49,
              44,
              34,
              101,
              109,
              97,
              105,
              108,
              34,
              58,
              34,
              103,
              101,
              111,
              114,
              103,
              101,
              46,
              98,
              108,
              117,
              116,
              104,
              64,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              34,
              44,
              34,
              102,
              105,
              114,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              71,
              101,
              111,
              114,
              103,
              101,
              34,
              44,
              34,
              108,
              97,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              66,
              108,
              117,
              116,
              104,
              34,
              44,
              34,
              97,
              118,
              97,
              116,
              97,
              114,
              34,
              58,
              34,
              104,
              116,
              116,
              112,
              115,
              58,
              47,
              47,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              47,
              105,
              109,
              103,
              47,
              102,
              97,
              99,
              101,
              115,
              47,
              49,
              45,
              105,
              109,
              97,
              103,
              101,
              46,
              106,
              112,
              103,
              34,
              125,
              44,
              123,
              34,
              105,
              100,
              34,
              58,
              50,
              44,
              34,
              101,
              109,
              97,
              105,
              108,
              34,
              58,
              34,
              106,
              97,
              110,
              101,
              116,
              46,
              119,
              101,
              97,
              118,
              101,
              114,
              64,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              34,
              44,
              34,
              102,
              105,
              114,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              74,
              97,
              110,
              101,
              116,
              34,
              44,
              34,
              108,
              97,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              87,
              101,
              97,
              118,
              101,
              114,
              34,
              44,
              34,
              97,
              118,
              97,
              116,
              97,
              114,
              34,
              58,
              34,
              104,
              116,
              116,
              112,
              115,
              58,
              47,
              47,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              47,
              105,
              109,
              103,
              47,
              102,
              97,
              99,
              101,
              115,
              47,
              50,
              45,
              105,
              109,
              97,
              103,
              101,
              46,
              106,
              112,
              103,
              34,
              125,
              44,
              123,
              34,
              105,
              100,
              34,
              58,
              51,
              44,
              34,
              101,
              109,
              97,
              105,
              108,
              34,
              58,
              34,
              101,
              109,
              109,
              97,
              46,
              119,
              111,
              110,
              103,
              64,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              34,
              44,
              34,
              102,
              105,
              114,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              69,
              109,
              109,
              97,
              34,
              44,
              34,
              108,
              97,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              87,
              111,
              110,
              103,
              34,
              44,
              34,
              97,
              118,
              97,
              116,
              97,
              114,
              34,
              58,
              34,
              104,
              116,
              116,
              112,
              115,
              58,
              47,
              47,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              47,
              105,
              109,
              103,
              47,
              102,
              97,
              99,
              101,
              115,
              47,
              51,
              45,
              105,
              109,
              97,
              103,
              101,
              46,
              106,
              112,
              103,
              34,
              125,
              44,
              123,
              34,
              105,
              100,
              34,
              58,
              52,
              44,
              34,
              101,
              109,
              97,
              105,
              108,
              34,
              58,
              34,
              101,
              118,
              101,
              46,
              104,
              111,
              108,
              116,
              64,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              34,
              44,
              34,
              102,
              105,
              114,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              69,
              118,
              101,
              34,
              44,
              34,
              108,
              97,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              72,
              111,
              108,
              116,
              34,
              44,
              34,
              97,
              118,
              97,
              116,
              97,
              114,
              34,
              58,
              34,
              104,
              116,
              116,
              112,
              115,
              58,
              47,
              47,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              47,
              105,
              109,
              103,
              47,
              102,
              97,
              99,
              101,
              115,
              47,
              52,
              45,
              105,
              109,
              97,
              103,
              101,
              46,
              106,
              112,
              103,
              34,
              125,
              44,
              123,
              34,
              105,
              100,
              34,
              58,
              53,
              44,
              34,
              101,
              109,
              97,
              105,
              108,
              34,
              58,
              34,
              99,
              104,
              97,
              114,
              108,
              101,
              115,
              46,
              109,
              111,
              114,
              114,
              105,
              115,
              64,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              34,
              44,
              34,
              102,
              105,
              114,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              67,
              104,
              97,
              114,
              108,
              101,
              115,
              34,
              44,
              34,
              108,
              97,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              77,
              111,
              114,
              114,
              105,
              115,
              34,
              44,
              34,
              97,
              118,
              97,
              116,
              97,
              114,
              34,
              58,
              34,
              104,
              116,
              116,
              112,
              115,
              58,
              47,
              47,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              47,
              105,
              109,
              103,
              47,
              102,
              97,
              99,
              101,
              115,
              47,
              53,
              45,
              105,
              109,
              97,
              103,
              101,
              46,
              106,
              112,
              103,
              34,
              125,
              44,
              123,
              34,
              105,
              100,
              34,
              58,
              54,
              44,
              34,
              101,
              109,
              97,
              105,
              108,
              34,
              58,
              34,
              116,
              114,
              97,
              99,
              101,
              121,
              46,
              114,
              97,
              109,
              111,
              115,
              64,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              34,
              44,
              34,
              102,
              105,
              114,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              84,
              114,
              97,
              99,
              101,
              121,
              34,
              44,
              34,
              108,
              97,
              115,
              116,
              95,
              110,
              97,
              109,
              101,
              34,
              58,
              34,
              82,
              97,
              109,
              111,
              115,
              34,
              44,
              34,
              97,
              118,
              97,
              116,
              97,
              114,
              34,
              58,
              34,
              104,
              116,
              116,
              112,
              115,
              58,
              47,
              47,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              47,
              105,
              109,
              103,
              47,
              102,
              97,
              99,
              101,
              115,
              47,
              54,
              45,
              105,
              109,
              97,
              103,
              101,
              46,
              106,
              112,
              103,
              34,
              125,
              93,
              44,
              34,
              115,
              117,
              112,
              112,
              111,
              114,
              116,
              34,
              58,
              123,
              34,
              117,
              114,
              108,
              34,
              58,
              34,
              104,
              116,
              116,
              112,
              115,
              58,
              47,
              47,
              114,
              101,
              113,
              114,
              101,
              115,
              46,
              105,
              110,
              47,
              35,
              115,
              117,
              112,
              112,
              111,
              114,
              116,
              45,
              104,
              101,
              97,
              100,
              105,
              110,
              103,
              34,
              44,
              34,
              116,
              101,
              120,
              116,
              34,
              58,
              34,
              84,
              111,
              32,
              107,
              101,
              101,
              112,
              32,
              82,
              101,
              113,
              82,
              101,
              115,
              32,
              102,
              114,
              101,
              101,
              44,
              32,
              99,
              111,
              110,
              116,
              114,
              105,
              98,
              117,
              116,
              105,
              111,
              110,
              115,
              32,
              116,
              111,
              119,
              97,
              114,
              100,
              115,
              32,
              115,
              101,
              114,
              118,
              101,
              114,
              32,
              99,
              111,
              115,
              116,
              115,
              32,
              97,
              114,
              101,
              32,
              97,
              112,
              112,
              114,
              101,
              99,
              105,
              97,
              116,
              101,
              100,
              33,
              34,
              125,
              125
            ]
          },
          "cookie": [],
          "responseTime": 3141,
          "responseSize": 996
        },
        "id": "34dc4f59-bfbc-4969-b6c7-d199ef343f40",
        "assertions": [
          {
            "assertion": "Status code is 200",
            "skipped": false
          },
          {
            "assertion": "Response time for DELAYED RESPONSE is less than 4000ms",
            "skipped": false
          },
          {
            "assertion": "Verify support text",
            "skipped": false
          }
        ]
      }
    ],
    "transfers": {
      "responseTotal": 3578
    },
    "failures": [],
    "error": null
  }
}