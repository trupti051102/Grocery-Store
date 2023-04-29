from mysql.connector import connection

#Connecting to the server
conn = connection.MySQLConnection(user='root',
                                  host ='localhost',
                                  database ='gs',password ='123456')

query = ("select * from products")

cursor = conn.cursor()

cursor.execute(query)

result = cursor.fetchall()

print(result)

conn.close()