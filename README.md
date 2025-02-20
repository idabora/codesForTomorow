[codesForTommorow.postman_collection.json](https://github.com/user-attachments/files/18885388/codesForTommorow.postman_collection.json)
# COPY paste .ENV file
    DB_HOST=localhost
    DB_USER=idabora
    DB_PASS=newpassword
    DB_NAME=mydatabase
    DB_PORT=5432
    JWT_SECRET=secretkey

## run node app.js to start server
    * http://localhost:5000 is a testing endpoint with a message "HEY" on screen

## Document all the API on Postman.
    https://test123-6582.postman.co/workspace/test123-Workspace~c218ba9d-c760-477c-a5d0-63c15f133753/collection/19430201-7ac0b8b3-9682-45ed-9e98-0c74b70a7d62?action=share&creator=19430201

## OR JUST IMPORT IT INTO YOUR POSTMAN
{
	"info": {
		"_postman_id": "7ac0b8b3-9682-45ed-9e98-0c74b70a7d62",
		"name": "codesForTommorow",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "19430201",
		"_collection_link": "https://test123-6582.postman.co/workspace/test123-Workspace~c218ba9d-c760-477c-a5d0-63c15f133753/collection/19430201-7ac0b8b3-9682-45ed-9e98-0c74b70a7d62?action=share&source=collection_link&creator=19430201"
	},
	"item": [
		{
			"name": "Service",
			"item": [
				{
					"name": "Add service",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGNvZGVzZm9ydG9tb3Jyb3cuY29tIiwiaWF0IjoxNzQwMDQ1ODg0LCJleHAiOjE3NDAwNDk0ODR9.IMQAVKXelBG3BCI2E-_GaNr2sdoh3M3K1wRhaXeeGM4",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"name\": \"Smartphone Repair\",\r\n  \"type\": \"Normal\",\r\n  \"priceOptions\": [\r\n    {\r\n      \"duration\": \"1\",\r\n      \"price\": 50,\r\n      \"type\": \"Hourly\"\r\n    },\r\n    {\r\n      \"duration\": \"3\",\r\n      \"price\": 120,\r\n      \"type\": \"Hourly\"\r\n    }\r\n  ]\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/category/:categoryId/service",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"category",
								":categoryId",
								"service"
							],
							"variable": [
								{
									"key": "categoryId",
									"value": "00371d29-e3a7-4f6a-b6f4-2d62f80d6999"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Delete service",
					"request": {
						"method": "GET",
						"header": []
					},
					"response": []
				},
				{
					"name": "Get service",
					"request": {
						"method": "GET",
						"header": []
					},
					"response": []
				},
				{
					"name": "Update Service",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGNvZGVzZm9ydG9tb3Jyb3cuY29tIiwiaWF0IjoxNzQwMDQ1ODg0LCJleHAiOjE3NDAwNDk0ODR9.IMQAVKXelBG3BCI2E-_GaNr2sdoh3M3K1wRhaXeeGM4",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\": \"Updated Service Name\",\r\n    \"type\": \"VIP\",\r\n    \"priceOptions\": [\r\n        {\r\n            \"id\": \"existing-price-option-id\",  // Existing price option ID\r\n            \"duration\": \"1\",\r\n            \"price\": 150.00,\r\n            \"type\": \"Hourly\"\r\n        },\r\n        {\r\n            \"id\": \"new-price-option-id\",  // New price option ID (if adding new)\r\n            \"duration\": \"1\",\r\n            \"price\": 400.00,\r\n            \"type\": \"Monthly\"\r\n        }\r\n    ]\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/category/:categoryId/service/:serviceId",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"category",
								":categoryId",
								"service",
								":serviceId"
							],
							"variable": [
								{
									"key": "categoryId",
									"value": "00371d29-e3a7-4f6a-b6f4-2d62f80d6999"
								},
								{
									"key": "serviceId",
									"value": "e1f0be43-7308-42b9-bdcf-0697e8487084"
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Category",
			"item": [
				{
					"name": "Update Category",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\":\"Wearables\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/category/:categoryId",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"category",
								":categoryId"
							],
							"variable": [
								{
									"key": "categoryId",
									"value": "07154cd6-a63b-4e23-bc6d-c2ee75d48379"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "create Category",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGNvZGVzZm9ydG9tb3Jyb3cuY29tIiwiaWF0IjoxNzQwMDQ1ODg0LCJleHAiOjE3NDAwNDk0ODR9.IMQAVKXelBG3BCI2E-_GaNr2sdoh3M3K1wRhaXeeGM4",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\":\"Electronics\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/category",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"category"
							]
						}
					},
					"response": []
				},
				{
					"name": "Delete Category",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGNvZGVzZm9ydG9tb3Jyb3cuY29tIiwiaWF0IjoxNzQwMDQ1ODg0LCJleHAiOjE3NDAwNDk0ODR9.IMQAVKXelBG3BCI2E-_GaNr2sdoh3M3K1wRhaXeeGM4",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:5000/category/:categoryId",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"category",
								":categoryId"
							],
							"variable": [
								{
									"key": "categoryId",
									"value": "07154cd6-a63b-4e23-bc6d-c2ee75d48379"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Get Categories",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGNvZGVzZm9ydG9tb3Jyb3cuY29tIiwiaWF0IjoxNzQwMDQ1ODg0LCJleHAiOjE3NDAwNDk0ODR9.IMQAVKXelBG3BCI2E-_GaNr2sdoh3M3K1wRhaXeeGM4",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:5000/category/categories",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"category",
								"categories"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "login",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"email\":\"admin@codesfortomorrow.com\",\r\n    \"password\":\"Admin123!@#\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/auth/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"auth",
						"login"
					]
				}
			},
			"response": []
		}
	]
}


