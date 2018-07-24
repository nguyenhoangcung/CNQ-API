define({ "api": [
  {
    "type": "get",
    "url": "/verify_email/:user_id/:active_code",
    "title": "Active email",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:1234/api/v1/user/verify_email/5acddc27404bc35eb360736f/G8NyAx9vKtRQ6jzKjdIJNFjIfo7kO62r",
        "type": "json"
      }
    ],
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "name": "Active_email",
    "group": "AUTH",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"success\": true,\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,422",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "false",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "422",
              "7"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,422,7",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error active link is incorrect or timeout:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"active_link_is_incorrect_or_timeout\",\n  \"success\": false,\n  \"error\": 7\n}",
          "type": "json"
        },
        {
          "title": "Error user not exist:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"user_not_exist\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error user blocked:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"user_blocked\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error email verified:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"email_verified\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error active fail:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"bad_request\",\n  \"success\": false,\n  \"error\": 400\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/AuthController.js",
    "groupTitle": "AUTH"
  },
  {
    "type": "post",
    "url": "/reset_password/:user_id/:active_code",
    "title": "Change new password",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:1234/api/v1/user/reset_password/5ab314337288960391a133e6/mXOSViDROSzBwHG5rLdkXIP9bM4crhQK",
        "type": "json"
      }
    ],
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "name": "Change_new_password",
    "group": "AUTH",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Password of the User.<br><code>required min:6 max:255</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"password\": \"123456\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"success\": true,\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,422",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "false",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "422",
              "7"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,422,7",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error password required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"password_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error password min length:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"password_min_6_chars\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error password max length:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"password_max_255_chars\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error active link is incorrect or timeout:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"active_link_is_incorrect_or_timeout\",\n  \"success\": false,\n  \"error\": 7\n}",
          "type": "json"
        },
        {
          "title": "Error user not exist:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"user_not_exist\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error user blocked:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"user_blocked\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error change new password failed:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"bad_request\",\n  \"success\": false,\n  \"error\": 400\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/AuthController.js",
    "groupTitle": "AUTH"
  },
  {
    "type": "get",
    "url": "/reset_password/:user_id/:active_code",
    "title": "Check change new password",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:1234/api/v1/user/reset_password/5ab314337288960391a133e6/mXOSViDROSzBwHG5rLdkXIP9bM4crhQK",
        "type": "json"
      }
    ],
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "name": "Check_change_new_password",
    "group": "AUTH",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"success\": true,\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,422",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "false",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "422",
              "7"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,422,7",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error active link is incorrect or timeout:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"active_link_is_incorrect_or_timeout\",\n  \"success\": false,\n  \"error\": 7\n}",
          "type": "json"
        },
        {
          "title": "Error user not exist:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"user_not_exist\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error user blocked:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"user_blocked\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error check change new password failed:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"bad_request\",\n  \"success\": false,\n  \"error\": 400\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/AuthController.js",
    "groupTitle": "AUTH"
  },
  {
    "type": "get",
    "url": "/check_policy",
    "title": "Check policy",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "name": "Check_policy",
    "group": "AUTH",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Example:",
          "content": "x-access-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWIzMTQzMzcyODg5NjAzOTFhMTMzZTYiLCJpYXQiOjE1MjE2ODc3MjMsImV4cCI6MTUyMjI5MjUyM30.k6_TjBdghiKVKB7EXCROjugrRuSaSn8hQMM7RXdXxxQ",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": \"\",\n  \"message\": \"success\",\n  \"success\": true,\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,422,401",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "false",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "401",
              "422",
              "1",
              "2",
              "5",
              "6"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,401,422,1,2,5,6",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error request unauthorized:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"request_unauthorized\",\n  \"success\": false,\n  \"error\": 401\n}",
          "type": "json"
        },
        {
          "title": "Error email not verify:",
          "content": "{\n   \"status\": 422,\n   \"message\": \"email_not_verify\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 1,\n}",
          "type": "json"
        },
        {
          "title": "Error phone not verify:",
          "content": "{\n   \"status\": 422,\n   \"message\": \"phone_not_verify\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 2,\n}",
          "type": "json"
        },
        {
          "title": "Error advice user create wallet:",
          "content": "{\n   \"status\": 422,\n   \"message\": \"advice_create_wallet\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 5,\n}",
          "type": "json"
        },
        {
          "title": "Error user blocked:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"user_blocked\",\n  \"success\": false,\n  \"error\": 6\n}",
          "type": "json"
        },
        {
          "title": "Error check policy failed:",
          "content": "{\n   \"status\": 400,\n   \"message\": \"bad_request\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 400,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/AuthController.js",
    "groupTitle": "AUTH"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "name": "Login",
    "group": "AUTH",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email of the User.<br><code>required malformed min:10 max:255</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Password of the User.<br><code>required min:6 max:255</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"user@digitalcoin.com\",\n  \"password\": \"123123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": \"7apsIGEwpUFgj6yL5nYuXRWj2rnP9UrzK91w05mRxXswRFbSiI6IKlgAjeICxibySAIlHc2vOKaEcRsQyTCqMXmdj6kgM3T4TTOPHPPqirUFOhCmO7vm6xXVI0dgimJBiOxy7ICqXxce6Ss4UtvV9uJURnUVbCZSWtelkX5oGvx5QqQkj0gWZUHN44L9jwkHerkEDpikzsIUKAB8V8WRyulUfr2ThZMiO8R4daeWoynrPGSfFuhuxexYe1scCJX\",\n  \"message\": \"success\",\n  \"success\": true,\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,422",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "false",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "422"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,422",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error email required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"email_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error email malformed:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"email_malformed\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error email not exist:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"email_not_exist\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error password required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"password_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error password min length:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"password_min_6_chars\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error password max length:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"password_max_255_chars\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error user blocked:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"user_blocked\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error login fail:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"email_or_password_incorrect\",\n  \"success\": false,\n  \"error\": 400\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/AuthController.js",
    "groupTitle": "AUTH"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "name": "Register",
    "group": "AUTH",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email of the User.<br><code>required malformed min:10 max:255</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Password of the User.<br><code>required min:6 max:255</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "term1",
            "description": "<p>You have read and understand our Whitepaper<br><code>required</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "term2",
            "description": "<p>You have read and understand our Token Sale Conditions<br><code>required</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "term3",
            "description": "<p>You are NOT a Citizen of China<br><code>required</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "term4",
            "description": "<p>You are NOT a Citizen of USA<br><code>required</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"user@digital.com\",\n  \"password\": \"123123\",\n  \"term1\": true,\n  \"term2\": true,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"success\": true,\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,422",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "false",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "422"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,422",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error email required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"email_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error email malformed:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"email_malformed\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error email exist:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"email_exist\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error register fail:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"bad_request\",\n  \"success\": false,\n  \"error\": 400\n}",
          "type": "json"
        },
        {
          "title": "Error password required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"password_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error password min length:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"password_min_6_chars\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error password max length:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"password_max_255_chars\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error term1 required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"term1_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error term1 must be true:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"term1_must_be_true\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error term2 required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"term2_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error term2 must be true:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"term2_must_be_true\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error term3 required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"term3_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error term3 must be true:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"term3_must_be_true\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error term4 required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"term4_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error term4 must be true:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"term4_must_be_true\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/AuthController.js",
    "groupTitle": "AUTH"
  },
  {
    "type": "post",
    "url": "/verify/email/resend_verification_email",
    "title": "Resend verify email",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "name": "Resend_verify_email",
    "group": "AUTH",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Example:",
          "content": "x-access-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWNkZTk3NGJhYTg3ODc0NTE3OWUyYjciLCJpYXQiOjE1MjM1MTUxNzgsImV4cCI6MTUyNDExOTk3OH0.pILx3XudPH6cmmuCr1P7SQPW9dXVSrV_z_Ov-dkjdVY",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"success\": true,\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,422,401",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "false",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "422",
              "401"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,422,401",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error request unauthorized:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"request_unauthorized\",\n  \"success\": false,\n  \"error\": 401\n}",
          "type": "json"
        },
        {
          "title": "Error user blocked:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"user_blocked\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error email verified:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"email_verified\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error resend mail failed:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"bad_request\",\n  \"success\": false,\n  \"error\": 400\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/AuthController.js",
    "groupTitle": "AUTH"
  },
  {
    "type": "post",
    "url": "/verify/phone/send_code",
    "title": "Send code verify phone",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "name": "Send_code_verify_phone",
    "group": "AUTH",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Example:",
          "content": "x-access-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWIzMTQzMzcyODg5NjAzOTFhMTMzZTYiLCJpYXQiOjE1MjE2ODc3MjMsImV4cCI6MTUyMjI5MjUyM30.k6_TjBdghiKVKB7EXCROjugrRuSaSn8hQMM7RXdXxxQ",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "Phone",
            "description": "<p>Phone verify.<br><code>required</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"phone\": +841659890153\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": \"\",\n  \"message\": \"success\",\n  \"success\": true,\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,422,401",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "401",
              "422",
              "1",
              "6"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,401,422,1,6",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error request unauthorized:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"request_unauthorized\",\n  \"success\": false,\n  \"error\": 401\n}",
          "type": "json"
        },
        {
          "title": "Error code require:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"code_is_require\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error email not verify:",
          "content": "{\n   \"status\": 422,\n   \"message\": \"email_not_verify\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 1,\n}",
          "type": "json"
        },
        {
          "title": "Error phone verified:",
          "content": "{\n   \"status\": 422,\n   \"message\": \"phone_verified\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 422,\n}",
          "type": "json"
        },
        {
          "title": "Error limit send code sms:",
          "content": "{\n   \"status\": 422,\n   \"message\": \"limit_send_sms\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 422,\n}",
          "type": "json"
        },
        {
          "title": "Error user blocked:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"user_blocked\",\n  \"success\": false,\n  \"error\": 6\n}",
          "type": "json"
        },
        {
          "title": "Error verify phone failed:",
          "content": "{\n   \"status\": 400,\n   \"message\": \"bad_request\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 400,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/AuthController.js",
    "groupTitle": "AUTH"
  },
  {
    "type": "post",
    "url": "/reset_password/send_mail",
    "title": "Send email reset password",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "name": "Send_email_reset_password",
    "group": "AUTH",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email of the User.<br><code>required malformed min:10 max:255</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"digital@gmail.com\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"success\": true,\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,422",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "false",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "422"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,422",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error email required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"email_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error email malformed:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"email_malformed\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error email not exist:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"email_not_exist\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error user blocked:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"user_blocked\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error limit send mail reset password:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"limit_send_mail_reset_password\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error send mail reset password failed:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"bad_request\",\n  \"success\": false,\n  \"error\": 400\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/AuthController.js",
    "groupTitle": "AUTH"
  },
  {
    "type": "post",
    "url": "/verify_identification",
    "title": "Verify Identification",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "name": "Verify_Identification",
    "group": "AUTH",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nation",
            "description": "<p>nation of the User.<br><code>required malformed exist</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fullname",
            "description": "<p>Fullname of the User.<br><code>required min:3 max:255</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "idNumber",
            "description": "<p>idNumber of the User.<br><code>required min:3 max:255</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "linkToIdImage",
            "description": "<p>linkToIdImage of the User.<br><code>required url-valid</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "linkToSelfieImage",
            "description": "<p>linkToSelfieImage of the User.<br><code>required url-valid</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "age",
            "description": "<p>Age of the User.<br><code>required </code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sex",
            "description": "<p>Sex of the User<br><code>required</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "genre",
            "description": "<p>Genre of the User<br><code>required</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"idNumber\": \"20579564\",\n  \"fullname\": \"digital gold\",\n  \"linkToIdImage\": \"http://lorempixel.com/640/480/fashion\",\n  \"linkToSelfieImage\": \"http://lorempixel.com/640/480/fashion\",\n  \"age\":23,\n  \"sex\":2,\n  \"genre\":[ \"Music\",\"Dance\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"success\": true,\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,422",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "false",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "422",
              "23",
              "24",
              "25"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,422,23,24,25",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error nation required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"nation_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error nation malformed:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"nation_malformed\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error nation not exist:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"nation_not_exist\",\n  \"success\": false,\n  \"error\": 24\n}",
          "type": "json"
        },
        {
          "title": "Error Genre is required",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"genre_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error Genre Malformed",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"genre_malformed\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error Genre Invalid",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"genre_invalid\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error Age is require",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"age_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error Age invalid",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"age_invalid\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error Sex is require",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"sex_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error Sex is not existed",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"sex_is_not_existed\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error verify identification fail:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"bad_request\",\n  \"success\": false,\n  \"error\": 400\n}",
          "type": "json"
        },
        {
          "title": "Error fullname required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"fullname_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error fullname min length:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"fullname_min_3_chars\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error fullname max length:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"fullname_max_255_chars\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error fullname must not char:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"fullname_must_not_chars\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error Idnumber required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"idNumber_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error Idnumber min length:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"Idnumber_min_3_chars\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error Idnumber max length:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"Idnumber_max_255_chars\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error linkToIdImage required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"linkToIdImage_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error linkToIdImage is invalid url:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"linkToIdImage_is_invalid_url\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error linkToSelfieImage required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"linkToSelfieImage_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error linkToSelfieImage is invalid url:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"linkToSelfieImage_is_invalid_url\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error Update load kyc fail:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"update_Kyc_failed\",\n  \"success\": false,\n  \"error\": 25\n}",
          "type": "json"
        },
        {
          "title": "Error User uploaded idenfitication:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"uploaded_Idenfitication\",\n  \"success\": false,\n  \"error\": 23\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/AuthController.js",
    "groupTitle": "AUTH"
  },
  {
    "type": "post",
    "url": "/verify/phone/confirm_code",
    "title": "Verify phone",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "name": "Verify_phone",
    "group": "AUTH",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Example:",
          "content": "x-access-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWIzMTQzMzcyODg5NjAzOTFhMTMzZTYiLCJpYXQiOjE1MjE2ODc3MjMsImV4cCI6MTUyMjI5MjUyM30.k6_TjBdghiKVKB7EXCROjugrRuSaSn8hQMM7RXdXxxQ",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "code",
            "description": "<p>Code verify.<br><code>required</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"code\": 123456\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": \"\",\n  \"message\": \"success\",\n  \"success\": true,\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,422,401",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "401",
              "422",
              "1",
              "6"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,401,422,1,6",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error request unauthorized:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"request_unauthorized\",\n  \"success\": false,\n  \"error\": 401\n}",
          "type": "json"
        },
        {
          "title": "Error code require:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"code_is_require\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error active link is incorrect or timeout:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"active_link_is_incorrect_or_timeout\",\n  \"success\": false,\n  \"error\": 7\n}",
          "type": "json"
        },
        {
          "title": "Error email not verify:",
          "content": "{\n   \"status\": 422,\n   \"message\": \"email_not_verify\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 1,\n}",
          "type": "json"
        },
        {
          "title": "Error phone verified:",
          "content": "{\n   \"status\": 422,\n   \"message\": \"phone_verified\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 422,\n}",
          "type": "json"
        },
        {
          "title": "Error user blocked:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"user_blocked\",\n  \"success\": false,\n  \"error\": 6\n}",
          "type": "json"
        },
        {
          "title": "Error verify phone failed:",
          "content": "{\n   \"status\": 400,\n   \"message\": \"bad_request\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 400,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/AuthController.js",
    "groupTitle": "AUTH"
  },
  {
    "type": "post",
    "url": "/create_link_s3",
    "title": "Create Link S3",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "name": "post_Create_Link_S3",
    "group": "AW",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": true,
            "field": "imageId[]",
            "description": "<p>File verify Profile and Email verify ID Number <br><code>required</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"imageId[]\": \"file\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n     \"status\": 200,\n      \"data\": {\n         images: \n                    [ 'https://arm-exchange-stg.s3.amazonaws.com/56020e61-ba7a-48c3-9b27-488c17ff3a21.jpg' ,\n                      'https://arm-exchange-stg.s3.ap-northeast-1.amazonaws.com/2d36dd05-22b3-45cf-93ba-2142ba0e1d14.jpg'\n                    ]\n            },\n      \"message\": \"success\",\n      \"success\": true,\n      \"error\": 0\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,401,422,500",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "false",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "401",
              "422",
              "500"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,401,422,500",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error upload image:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"upload_image_error\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "idNumber, profile required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"please_enter_full_information\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error type file not allow:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"file_type_not_allow\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error file exceeds upload limit:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"file_exceeds_upload_limit\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error request unauthorized:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"request_unauthorized\",\n  \"success\": false,\n  \"error\": 401\n}",
          "type": "json"
        },
        {
          "title": "Error create link s3 fail:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"bad_request\",\n  \"success\": false,\n  \"error\": 400\n}",
          "type": "json"
        },
        {
          "title": "Error Server Internal:",
          "content": "{\n  \"status\": 500,\n  \"data\": null,\n  \"message\": \"server_error\",\n  \"success\": false,\n  \"error\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/AwController.js",
    "groupTitle": "AW"
  },
  {
    "type": "get",
    "url": "/coins",
    "title": "Get coin",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "name": "Get_coin",
    "group": "COIN",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Example:",
          "content": "x-access-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWIzMTQzMzcyODg5NjAzOTFhMTMzZTYiLCJpYXQiOjE1MjE2ODc3MjMsImV4cCI6MTUyMjI5MjUyM30.k6_TjBdghiKVKB7EXCROjugrRuSaSn8hQMM7RXdXxxQ",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": [\n    {\n      \"_id\": \"5ab1bd44ec10fb02db65d9b0\",\n      \"name\": \"Bitcoin\",\n      \"ratio\": 3,\n      \"minimum\": 1\n    },\n    {\n      \"_id\": \"5ab1bd44ec10fb02db65d9b1\",\n      \"name\": \"Ethereum\",\n     \"ratio\": 2,\n      \"minimum\": 2\n    }\n  ],\n  \"message\": \"success\",\n  \"success\": true,\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,401,422,500",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "false",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "401",
              "422",
              "500",
              "1",
              "2",
              "5",
              "6"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,401,422,1,2,5,6",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error request unauthorized:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"request_unauthorized\",\n  \"success\": false,\n  \"error\": 401\n}",
          "type": "json"
        },
        {
          "title": "Error email not verify:",
          "content": "{\n   \"status\": 422,\n   \"message\": \"email_not_verify\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 1,\n}",
          "type": "json"
        },
        {
          "title": "Error phone not verify:",
          "content": "{\n   \"status\": 422,\n   \"message\": \"phone_not_verify\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 2,\n}",
          "type": "json"
        },
        {
          "title": "Advice user create wallet:",
          "content": "{\n   \"status\": 422,\n   \"message\": \"advice_create_wallet\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 5,\n}",
          "type": "json"
        },
        {
          "title": "Error user blocked:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"user_blocked\",\n  \"success\": false,\n  \"error\": 6\n}",
          "type": "json"
        },
        {
          "title": "Error check coin failed:",
          "content": "{\n   \"status\": 400,\n   \"message\": \"bad_request\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 400,\n}",
          "type": "json"
        },
        {
          "title": "Error Server Internal:",
          "content": "{\n  \"status\": 500,\n  \"data\": null,\n  \"message\": \"server_error\",\n  \"success\": false,\n  \"error\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/CoinController.js",
    "groupTitle": "COIN"
  },
  {
    "type": "post",
    "url": "/contact",
    "title": "Contact",
    "version": "1.0.0",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "name": "Contact",
    "group": "CONTACT",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email of the User.<br><code>required malformed min:10 max:255</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the User.<br><code>required min:3 max:255</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>Content of the User.<br><code>required max:500</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Reply\",\n  \"email\": \"user@digitalcoin.com\",\n  \"content\": \"Are you ok\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"success\": true,\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,422",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "false",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "422"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,422",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error email required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"email_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error email malformed:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"email_malformed\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error name required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"name_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error name min length:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"name_min_3_chars\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error name max length:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"name_max_255_chars\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error content required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"content_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error content max length:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"content_max_500_chars\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error name must not special char:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"name_must_not_special_chars\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error post contact failed:",
          "content": "{\n   \"status\": 400,\n   \"message\": \"bad_request\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 400,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/UserController.js",
    "groupTitle": "CONTACT"
  },
  {
    "type": "get",
    "url": "/nation",
    "title": "Get nation information",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "name": "Get_nation_infomation",
    "group": "NATION",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\t\t\"status\": 200,\n\t\t\"data\": [\n \t\t{\n     \t\t\"_id\": \"5ab4ba11e7a48a4953228381\",\n     \t\t\"name\": \"Vietnamese\",\n     \t\t\"code\": \"84\"\n \t\t}\n\t\t],\n\t\t\"message\": \"success\",\n\t\t\"success\": true,\n\t\t\"error\": 0\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,422,401,404",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "false",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "422",
              "401",
              "404",
              "1",
              "2",
              "5",
              "6"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,422,401,404,1,2,5,6",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error request unauthorized:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"request_unauthorized\",\n  \"success\": false,\n  \"error\": 401\n}",
          "type": "json"
        },
        {
          "title": "Error user not exist:",
          "content": "{\n  \"status\": 404,\n  \"data\": null,\n  \"message\": \"user_not_exist\",\n  \"success\": false,\n  \"error\": 404\n}",
          "type": "json"
        },
        {
          "title": "Error email unvalidation",
          "content": "{\n\t\t\"status\": 422,\n\t\t\"message\": \"email_not_verify\",\n\t\t\"data\": null,\n\t\t\"success\": false,\n\t\t\"error\": 1\n\t}",
          "type": "json"
        },
        {
          "title": "Error phone unvalidation",
          "content": "{\n\t\t\"status\": 422,\n\t\t\"message\": \"phone_not_verify\",\n\t\t\"data\": null,\n\t\t\"success\": false,\n\t\t\"error\": 2\n\t}",
          "type": "json"
        },
        {
          "title": "Error advice create wallet",
          "content": "{\n\t\t\"status\": 422,\n\t\t\"message\": \"advice_create_wallet\",\n\t\t\"data\": null,\n\t\t\"success\": false,\n\t\t\"error\": 5\n\t}",
          "type": "json"
        },
        {
          "title": "Error user blocked:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"user_blocked\",\n  \"success\": false,\n  \"error\": 6\n}",
          "type": "json"
        },
        {
          "title": "Error get user infor failed:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"bad_request\",\n  \"success\": false,\n  \"error\": 400\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/NationController.js",
    "groupTitle": "NATION"
  },
  {
    "type": "get",
    "url": "/setting",
    "title": "Get setting",
    "name": "Get_setting",
    "group": "SETTING",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Example:",
          "content": "x-access-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWIzMTQzMzcyODg5NjAzOTFhMTMzZTYiLCJpYXQiOjE1MjE2ODc3MjMsImV4cCI6MTUyMjI5MjUyM30.k6_TjBdghiKVKB7EXCROjugrRuSaSn8hQMM7RXdXxxQ",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "token",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>Message success</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "description": "<p><code>true</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>Error value</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n     \"startTime\": \"2018-03-23T09:25:16.380Z\",\n     \"endTime\": \"2019-03-23T09:45:16.380Z\",\n     \"icoStatus\": false\n  },\n  \"message\": \"success\",\n  \"success\": \"true\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,401",
            "description": "<p>status response</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>message error response</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "description": "<p><code>false</code></p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "401"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,401",
            "description": "<p>Error value</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request unauthorized:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"request_unauthorized\",\n  \"success\": \"false\",\n  \"error\": 401\n}",
          "type": "json"
        },
        {
          "title": "Bad request:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"bad_request\",\n  \"success\": \"false\",\n  \"error\": 400\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/SettingController.js",
    "groupTitle": "SETTING"
  },
  {
    "type": "post",
    "url": "/subscribe",
    "title": "Subscribe",
    "version": "1.0.0",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "name": "postSubscribe",
    "group": "SUBCRIBE",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email of the User who want to subcribe.<br><code>required malformed min:10 max:255</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"user@digitalcoin.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n     \"status\": 200,\n      \"data\": null,\n      \"message\": \"success\",\n      \"success\": true,\n      \"error\": 0\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,422",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "false",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "422"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,422",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error email required:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"email_is_required\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error email malformed:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"email_malformed\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error email exist:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"email_exist\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error subscribe failed:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"bad_request\",\n  \"success\": false,\n  \"error\": 400\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/SubscribeController.js",
    "groupTitle": "SUBCRIBE"
  },
  {
    "type": "get",
    "url": "/history",
    "title": "Transaction history",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "name": "Transaction_history",
    "group": "TRANSACTION",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Example:",
          "content": "x-access-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWIzMTQzMzcyODg5NjAzOTFhMTMzZTYiLCJpYXQiOjE1MjE2ODc3MjMsImV4cCI6MTUyMjI5MjUyM30.k6_TjBdghiKVKB7EXCROjugrRuSaSn8hQMM7RXdXxxQ",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n \"status\": 200,\n \"data\": {\n     \"docs\": [\n         {\n             \"_id\": \"5ab1bd44ec10fb02db65d9c2\",\n             \"transactionHash\": \"0xab4h5235hbhb1\",\n             \"to\": \"0xff234234929234h1\",\n             \"amount\": 100,\n             \"coin\": {\n                 \"name\": \"Ethereum\"\n             },\n             \"status\": 0,\n             \"transactionType\": 1\n         },\n         {\n             \"_id\": \"5ab1bd44ec10fb02db65d9c0\",\n             \"transactionHash\": \"0xab4h5235hbhb2\",\n             \"to\": \"0xff234234929234h2\",\n             \"amount\": 100,\n             \"coin\": {\n                 \"name\": \"Bitcoin\"\n             },\n             \"status\": 1,\n             \"transactionType\": 0\n         },\n         {\n             \"_id\": \"5ab1bd44ec10fb02db65d9c1\",\n             \"transactionHash\": \"0xab4h5235hbhb1\",\n             \"to\": \"0xff234234929234h1\",\n             \"amount\": 100,\n             \"coin\": {\n                 \"name\": \"Ethereum\"\n             },\n             \"status\": 2,\n             \"transactionType\": 1\n         }\n     ],\n     \"total\": 3,\n     \"limit\": 10,\n     \"page\": \"1\",\n     \"pages\": 1\n },\n \"message\": \"success\",\n \"success\": true,\n \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,422,401",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "false",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "401",
              "422",
              "1",
              "2",
              "5",
              "6"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,401,422,1,2,5,6",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error request unauthorized:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"request_unauthorized\",\n  \"success\": false,\n  \"error\": 401\n}",
          "type": "json"
        },
        {
          "title": "Error email not verify:",
          "content": "{\n   \"status\": 422,\n   \"message\": \"email_not_verify\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 1,\n}",
          "type": "json"
        },
        {
          "title": "Error phone not verify:",
          "content": "{\n   \"status\": 422,\n   \"message\": \"phone_not_verify\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 2,\n}",
          "type": "json"
        },
        {
          "title": "Error Advice create wallet:",
          "content": "{\n   \"status\": 422,\n   \"message\": \"advice_create_wallet\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 5,\n}",
          "type": "json"
        },
        {
          "title": "Error user blocked:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"user_blocked\",\n  \"success\": false,\n  \"error\": 6\n}",
          "type": "json"
        },
        {
          "title": "Error check history transaction failed:",
          "content": "{\n   \"status\": 400,\n   \"message\": \"bad_request\",\n   \"data\": null,\n   \"success\": false,\n   \"error\": 400,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/TransactionController.js",
    "groupTitle": "TRANSACTION"
  },
  {
    "type": "get",
    "url": "/info",
    "title": "Get user information",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "name": "Get_user_infomation",
    "group": "USER",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Example:",
          "content": "x-access-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWIzMTQzMzcyODg5NjAzOTFhMTMzZTYiLCJpYXQiOjE1MjE2ODc3MjMsImV4cCI6MTUyMjI5MjUyM30.k6_TjBdghiKVKB7EXCROjugrRuSaSn8hQMM7RXdXxxQ",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"status\": 200,\n      \"data\": {\n          \"_id\": \"5ad81aafcd16e70d9eb13ee6\",\n          \"updatedAt\": \"2018-04-19T04:27:27.899Z\",\n          \"createdAt\": \"2018-04-19T04:27:27.899Z\",\n          \"user\": {\n              \"_id\": \"5ad81a98cd16e70d9eb13e82\",\n              \"email\": \"emerson_hudson23@gmail.com\",\n              \"digitalGoldAddress\": \"3KAMPN1D87THsyrRgA5uVoXfL7dGPaZz\",\n              \"address\": {\n                  \"ETH\": \"1NfGS6Fj3EQNyAERPtejcSYqnXE\",\n                  \"BTC\": \"12BwJbzojpJnUSWb7XGbB6U7nBnbY98p\",\n                  \"XRP\": \"1ezUhKhAWYrZKZoQbZVMsMBZLVye\"\n              },\n              \"balance\": 54543\n          },\n          \"fullname\": \"Cormac McLaggen\",\n          \"phone\": \"(636) 585-4669\",\n          \"age\": 25985,\n          \"sex\": 421,\n          \"idNumber\": \"22009\",\n          \"linkToIdImage\": \"http://lorempixel.com/640/480/fashion\",\n          \"linkToSelfieImage\": \"http://lorempixel.com/640/480/fashion\",\n          \"approvalStatus\": 1,\n          \"nation\": \"5acf07ab91a8e6179318cfaf\",\n          \"__v\": 0,\n          \"genre\": [],\n          \"isPhoneVerified\": true,\n          \"isEmailVerified\": true\n      },\n      \"message\": \"success\",\n      \"success\": true,\n      \"error\": 0\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,422,401,404",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "false",
            "description": "<p>status success</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "422",
              "401",
              "404",
              "1",
              "2",
              "5",
              "6"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,422,401,404,1,2,5,6",
            "description": "<p>Giá trị lỗi.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error request unauthorized:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"request_unauthorized\",\n  \"success\": false,\n  \"error\": 401\n}",
          "type": "json"
        },
        {
          "title": "Error user not exist:",
          "content": "{\n  \"status\": 404,\n  \"data\": null,\n  \"message\": \"user_not_exist\",\n  \"success\": false,\n  \"error\": 404\n}",
          "type": "json"
        },
        {
          "title": "Error email unvalidation",
          "content": "{\n\t\t\"status\": 422,\n\t\t\"message\": \"email_not_verify\",\n\t\t\"data\": null,\n\t\t\"success\": false,\n\t\t\"error\": 1\n\t}",
          "type": "json"
        },
        {
          "title": "Error phone unvalidation",
          "content": "{\n\t\t\"status\": 422,\n\t\t\"message\": \"phone_not_verify\",\n\t\t\"data\": null,\n\t\t\"success\": false,\n\t\t\"error\": 2\n\t}",
          "type": "json"
        },
        {
          "title": "Error advice create wallet",
          "content": "{\n\t\t\"status\": 422,\n\t\t\"message\": \"advice_create_wallet\",\n\t\t\"data\": null,\n\t\t\"success\": false,\n\t\t\"error\": 5\n\t}",
          "type": "json"
        },
        {
          "title": "Error user blocked:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"user_blocked\",\n  \"success\": false,\n  \"error\": 6\n}",
          "type": "json"
        },
        {
          "title": "Error get user infor failed:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"bad_request\",\n  \"success\": false,\n  \"error\": 400\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/UserController.js",
    "groupTitle": "USER"
  },
  {
    "type": "get",
    "url": "/my_wallet",
    "title": "Get wallet information",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "name": "Get_wallet_information",
    "group": "USER",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Example:",
          "content": "x-access-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWIzMTQzMzcyODg5NjAzOTFhMTMzZTYiLCJpYXQiOjE1MjE2ODc3MjMsImV4cCI6MTUyMjI5MjUyM30.k6_TjBdghiKVKB7EXCROjugrRuSaSn8hQMM7RXdXxxQ",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n   \"status\": 200,\n   \"data\": {\n        \"_id\": \"5ab1bd44ec10fb02db65d9b5\",\n        \"balance\": 200,\n        \"digitalGoldAddress\": \"AFze3YW6hzJ5oj4srcemBnnEEm8E9b4Ab7\",\n        \"walletJsonFile\": {\n          \"extra\": null,\n          \"accounts\": [\n              {\n                  \"extra\": null,\n                  \"contract\": {\n                      \"deployed\": false,\n                      \"parameters\": [\n                          {\n                              \"type\": \"Signature\",\n                              \"name\": \"signature\"\n                          }\n                      ],\n                      \"script\": \"2102a7f8ff0aabecb787851263676826e15a15e4bc703171d236df29aa93aee9a8ddac\"\n                  },\n                  \"key\": \"6PYRuQDwLL8w7NWkySRsfufrFZycnAmrAMfhqpUUfGVgFN3mdyRqnWJ22b\",\n                  \"lock\": false,\n                  \"isDefault\": false,\n                  \"label\": null,\n                  \"address\": \"ANzHohFZRrAdUu7Jt4f8nzEe1RgDVJAAjh\"\n              }\n          ],\n         \"scrypt\": {\n              \"p\": 8,\n              \"r\": 8,\n              \"n\": 16384\n         },\n         \"version\": \"1.0\",\n         \"name\": null\n  },\n  \"message\": \"success\",\n  \"success\": true,\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,422,401,404",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "false",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "422",
              "401",
              "404",
              "1",
              "2",
              "5",
              "6"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,422,401,404,1,2,5,6",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error request unauthorized:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"request_unauthorized\",\n  \"success\": false,\n  \"error\": 401\n}",
          "type": "json"
        },
        {
          "title": "Error user not exist:",
          "content": "{\n  \"status\": 404,\n  \"data\": null,\n  \"message\": \"user_not_exist\",\n  \"success\": false,\n  \"error\": 404\n}",
          "type": "json"
        },
        {
          "title": "Error email unvalidation",
          "content": "{\n        \"status\": 422,\n        \"message\": \"email_not_verify\",\n        \"data\": null,\n        \"success\": false,\n        \"error\": 1\n  }",
          "type": "json"
        },
        {
          "title": "Error phone unvalidation",
          "content": "{\n        \"status\": 422,\n        \"message\": \"phone_not_verify\",\n        \"data\": null,\n        \"success\": false,\n        \"error\": 2\n  }",
          "type": "json"
        },
        {
          "title": "Error advice create wallet",
          "content": "{\n        \"status\": 422,\n        \"message\": \"advice_create_wallet\",\n        \"data\": null,\n        \"success\": false,\n        \"error\": 5\n  }",
          "type": "json"
        },
        {
          "title": "Error user blocked:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"user_blocked\",\n  \"success\": false,\n  \"error\": 6\n}",
          "type": "json"
        },
        {
          "title": "Error get user infor failed:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"bad_request\",\n  \"success\": false,\n  \"error\": 400\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/UserController.js",
    "groupTitle": "USER"
  },
  {
    "type": "post",
    "url": "/initialize_wallet",
    "title": "Initialize Wallet",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "name": "Initialize_Wallet",
    "group": "USER",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Example:",
          "content": "x-access-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWIzMTQzMzcyODg5NjAzOTFhMTMzZTYiLCJpYXQiOjE1MjE2ODc3MjMsImV4cCI6MTUyMjI5MjUyM30.k6_TjBdghiKVKB7EXCROjugrRuSaSn8hQMM7RXdXxxQ",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "digitalGoldAddress",
            "description": "<p>Digital Address.<br><code>required</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "walletJsonFile",
            "description": "<p>Wallet Json File.<br><code>required</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"digitalGoldAddress\": \"3KA6p6kek1ELuqmPti32FmKe9kGvVt5S\",\n  \"walletJsonFile\": \"{\"extra\":null,\"accounts\":[{\"extra\":null,\"contract\":{\"deployed\":false,\"parameters\":[{\"type\":\"Signature\",\"name\":\"signature\"}],\"script\":\"2102a7f8ff0aabecb787851263676826e15a15e4bc703171d236df29aa93aee9a8ddac\"},\"key\":\"6PYRuQDwLL8w7NWkySRsfufrFZycnAmrAMfhqpUUfGVgFN3mdyRqnWJ22b\",\"lock\":false,\"isDefault\":false,\"label\":null,\"address\":\"ANzHohFZRrAdUu7Jt4f8nzEe1RgDVJAAjh\"}],\"scrypt\":{\"p\":8,\"r\":8,\"n\":16384},\"version\":\"1.0\",\"name\":null}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>message success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n   \"status\": 200,\n   \"data\": null,\n   \"message\": \"success\",\n   \"success\": true,\n   \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "400,422,401,404",
            "description": "<p>status response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": true,
            "field": "data",
            "defaultValue": "null",
            "description": "<p>data response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message error response.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": true,
            "field": "success",
            "defaultValue": "false",
            "description": "<p>status success.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "allowedValues": [
              "400",
              "422",
              "401",
              "404",
              "1",
              "2",
              "6",
              "18"
            ],
            "optional": true,
            "field": "error",
            "defaultValue": "400,422,401,404,1,2,6,18",
            "description": "<p>value error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error request unauthorized:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"request_unauthorized\",\n  \"success\": false,\n  \"error\": 401\n}",
          "type": "json"
        },
        {
          "title": "Error email unvalidation",
          "content": "{\n  \"status\": 422,\n  \"message\": \"email_not_verify\",\n  \"data\": null,\n  \"success\": false,\n  \"error\": 1\n}",
          "type": "json"
        },
        {
          "title": "Error phone unvalidation",
          "content": "{\n  \"status\": 422,\n  \"message\": \"phone_not_verify\",\n  \"data\": null,\n  \"success\": false,\n  \"error\": 2\n}",
          "type": "json"
        },
        {
          "title": "Error user blocked:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"user_blocked\",\n  \"success\": false,\n  \"error\": 6\n}",
          "type": "json"
        },
        {
          "title": "account created wallet:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"created_wallet\",\n  \"success\": false,\n  \"error\": 18\n}",
          "type": "json"
        },
        {
          "title": "digitalGoldAddress require:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"digital_gold_address_is_require\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "walletJsonFile require:",
          "content": "{\n  \"status\": 422,\n  \"data\": null,\n  \"message\": \"wallet_json_file_is_require\",\n  \"success\": false,\n  \"error\": 422\n}",
          "type": "json"
        },
        {
          "title": "Error create wallet failed:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"bad_request\",\n  \"success\": false,\n  \"error\": 400\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/UserController.js",
    "groupTitle": "USER"
  }
] });
