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
    ],
    "tableRepeat2": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
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
          "type": "text",
          "name": "pro_desc"
        },
        {
          "type": "boolean",
          "name": "pro_stat"
        },
        {
          "type": "number",
          "name": "pro_stock"
        },
        {
          "type": "text",
          "name": "pro_image"
        }
      ],
      "outputType": "array"
    },
    "editCart": [
      {
        "type": "number",
        "name": "pro_id"
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
        "name": "total_amount"
      },
      {
        "type": "number",
        "name": "ord_id"
      }
    ]
  }
});
