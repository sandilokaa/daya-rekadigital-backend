# **Daya Rekadigital**

Ini merupakan challenge yang diberikan oleh Daya Rekadigital

## **How To Use**

  ```
  yarn install
  ```

  ```
  node models/customer.js
  ```

  ```
  node models/transaction.js
  ```

## **Tech Stack**


## **Endpoint**

  Berikut endpoint RESTful API serta contoh request dan hasil response.

### **Create New Transaction**

  ---

  POST

  **Example**

  ```
  http://localhost:8080/api/transaction
  ```

  **Request**

  ``` 
  {
    "customer_id": 1,
    "menu": "Nasi Goreng",
    "price": 17000,
    "qty": 2,
    "payment": "Cash"
  }
  ```

  **Response**

  ```
  {
    "status": true,
    "message": "New transaction created successfully",
    "data": {
        "transactionHandler": [
            {
                "id": 7,
                "customer_id": 1,
                "menu": "Nasi Goreng",
                "price": 17000,
                "qty": 2,
                "payment": "Cash",
                "total": 34000,
                "created_at": "2024-01-11T20:49:34.000Z"
            }
        ]
    }
  }
  ```

