$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contacts/contacts.feature");
formatter.feature({
  "line": 2,
  "name": "Create Contacts functionality",
  "description": "",
  "id": "create-contacts-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ui"
    }
  ]
});
formatter.before({
  "duration": 2241972749,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am logged in as admin",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I open the \u0027Contacts\u0027 page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.login_admin_user()"
});
formatter.result({
  "duration": 4223804863,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefs.navigate_contacts_page()"
});
formatter.result({
  "duration": 224523499,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "I am warned when trying to create a new contact with a short phone number",
  "description": "",
  "id": "create-contacts-functionality;i-am-warned-when-trying-to-create-a-new-contact-with-a-short-phone-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I click on \u0027Add\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter \u0027TestUser\u0027 \u0027+40723\u0027 and \u0027Some address\u0027 in the Edit panel",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see a warning that the phone number is too short",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "The \u0027Submit\u0027 button is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "ContactsStepDefs.click_on_add()"
});
formatter.result({
  "duration": 291252388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestUser",
      "offset": 9
    },
    {
      "val": "+40723",
      "offset": 20
    },
    {
      "val": "Some address",
      "offset": 33
    }
  ],
  "location": "ContactsStepDefs.fill_contact_info(String,String,String)"
});
formatter.result({
  "duration": 790117090,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "I can add a new contact",
  "description": "",
  "id": "create-contacts-functionality;i-can-add-a-new-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I click on \u0027Add\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter \u0027\u003cname\u003e\u0027 \u0027\u003cphone\u003e\u0027 and \u0027\u003caddress\u003e\u0027 in the Edit panel",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click \u0027Submit\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see \u0027\u003cname\u003e\u0027 in the list of contacts",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "create-contacts-functionality;i-can-add-a-new-contact;",
  "rows": [
    {
      "cells": [
        "name",
        "address",
        "phone"
      ],
      "line": 21,
      "id": "create-contacts-functionality;i-can-add-a-new-contact;;1"
    },
    {
      "cells": [
        "Serban",
        "Str. Some street nr. 2",
        "+4077235653"
      ],
      "line": 22,
      "id": "create-contacts-functionality;i-can-add-a-new-contact;;2"
    },
    {
      "cells": [
        "Decebal",
        "Str. Burebista nr. 3",
        "+4077235655"
      ],
      "line": 23,
      "id": "create-contacts-functionality;i-can-add-a-new-contact;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23047169,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am logged in as admin",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I open the \u0027Contacts\u0027 page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.login_admin_user()"
});
formatter.result({
  "duration": 2991748934,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefs.navigate_contacts_page()"
});
formatter.result({
  "duration": 195088532,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "I can add a new contact",
  "description": "",
  "id": "create-contacts-functionality;i-can-add-a-new-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ui"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I click on \u0027Add\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter \u0027Serban\u0027 \u0027+4077235653\u0027 and \u0027Str. Some street nr. 2\u0027 in the Edit panel",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click \u0027Submit\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see \u0027Serban\u0027 in the list of contacts",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsStepDefs.click_on_add()"
});
formatter.result({
  "duration": 263457190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Serban",
      "offset": 9
    },
    {
      "val": "+4077235653",
      "offset": 18
    },
    {
      "val": "Str. Some street nr. 2",
      "offset": 36
    }
  ],
  "location": "ContactsStepDefs.fill_contact_info(String,String,String)"
});
formatter.result({
  "duration": 632436595,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefs.click_submit()"
});
formatter.result({
  "duration": 160843231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Serban",
      "offset": 14
    }
  ],
  "location": "ContactsStepDefs.contact_name_is_present_in_contacts_table(String)"
});
formatter.result({
  "duration": 160144197,
  "status": "passed"
});
formatter.before({
  "duration": 46928663,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am logged in as admin",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I open the \u0027Contacts\u0027 page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.login_admin_user()"
});
formatter.result({
  "duration": 3009278113,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefs.navigate_contacts_page()"
});
formatter.result({
  "duration": 179375360,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "I can add a new contact",
  "description": "",
  "id": "create-contacts-functionality;i-can-add-a-new-contact;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ui"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I click on \u0027Add\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter \u0027Decebal\u0027 \u0027+4077235655\u0027 and \u0027Str. Burebista nr. 3\u0027 in the Edit panel",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click \u0027Submit\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see \u0027Decebal\u0027 in the list of contacts",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsStepDefs.click_on_add()"
});
formatter.result({
  "duration": 272229408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Decebal",
      "offset": 9
    },
    {
      "val": "+4077235655",
      "offset": 19
    },
    {
      "val": "Str. Burebista nr. 3",
      "offset": 37
    }
  ],
  "location": "ContactsStepDefs.fill_contact_info(String,String,String)"
});
formatter.result({
  "duration": 751084212,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefs.click_submit()"
});
formatter.result({
  "duration": 297174466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Decebal",
      "offset": 14
    }
  ],
  "location": "ContactsStepDefs.contact_name_is_present_in_contacts_table(String)"
});
formatter.result({
  "duration": 151968996,
  "status": "passed"
});
formatter.uri("login/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login functionality",
  "description": "Unauthorized users first need to login into the application.\nUsers who enter right credentials should be able to login into the application.\nUsers who enter wrong credentials are shown an error message.",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ui"
    }
  ]
});
formatter.before({
  "duration": 1364499332,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I try to access the \u0027Contacts\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I see the \u0027Login\u0027 page",
  "keyword": "And "
});
formatter.match({
  "location": "ContactsStepDefs.navigate_contacts_page()"
});
formatter.result({
  "duration": 241142833,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.login_page_is_shown()"
});
formatter.result({
  "duration": 680806356,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Entering valid credentials I am able to login and see \u0027Contacts\u0027 page",
  "description": "",
  "id": "login-functionality;entering-valid-credentials-i-am-able-to-login-and-see-\u0027contacts\u0027-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I login with user \u0027admin\u0027 and with password \u0027admin\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should see the \u0027Contacts\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 19
    },
    {
      "val": "admin",
      "offset": 45
    }
  ],
  "location": "LoginStepDefs.login_user(String,String)"
});
formatter.result({
  "duration": 2208498723,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefs.is_contacts_page()"
});
formatter.result({
  "duration": 8503669,
  "status": "passed"
});
formatter.before({
  "duration": 24375297,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I try to access the \u0027Contacts\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I see the \u0027Login\u0027 page",
  "keyword": "And "
});
formatter.match({
  "location": "ContactsStepDefs.navigate_contacts_page()"
});
formatter.result({
  "duration": 182065051,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.login_page_is_shown()"
});
formatter.result({
  "duration": 672840614,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Entering invalid credentials I am warned that login has failed",
  "description": "",
  "id": "login-functionality;entering-invalid-credentials-i-am-warned-that-login-has-failed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I login with user \u0027hacker\u0027 and with password \u0027\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should see a failed login warning message with key \u0027login.warnLoginFailed\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hacker",
      "offset": 19
    },
    {
      "val": "",
      "offset": 46
    }
  ],
  "location": "LoginStepDefs.login_user(String,String)"
});
formatter.result({
  "duration": 2134955782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login.warnLoginFailed",
      "offset": 54
    }
  ],
  "location": "LoginStepDefs.failed_login_warn_message_is_shown(String)"
});
formatter.result({
  "duration": 675206295,
  "status": "passed"
});
});