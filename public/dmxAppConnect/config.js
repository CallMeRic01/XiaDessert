dmx.config({
  "test": {
    "employee": {
      "meta": [
        {
          "type": "text",
          "name": "user_firstName"
        },
        {
          "type": "text",
          "name": "user_lastName"
        }
      ],
      "outputType": "array"
    }
  },
  "navbar": {
    "repeat1": {
      "meta": [
        {
          "type": "text",
          "name": "user_firstName"
        },
        {
          "type": "text",
          "name": "user_lastName"
        }
      ],
      "outputType": "array"
    },
    "clockInStore": [
      {
        "type": "boolean",
        "name": "clockedIn"
      },
      {
        "type": "text",
        "name": "clockInTime"
      },
      {
        "type": "text",
        "name": "user_id"
      },
      {
        "type": "text",
        "name": "clockOutTime"
      }
    ]
  },
  "admin_dashboard": {
    "query": [
      {
        "type": "text",
        "name": "offset"
      }
    ]
  },
  "admin_order": {
    "cart": [
      {
        "type": "number",
        "name": "pro_id"
      },
      {
        "type": "text",
        "name": "pro_name"
      },
      {
        "type": "number",
        "name": "pro_price"
      },
      {
        "type": "number",
        "name": "detOrd_quantity"
      },
      {
        "type": "number",
        "name": "pro_stock"
      }
    ]
  }
});
