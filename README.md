
# Atlan Frontend Assignment - SQL Editor in Reactjs

A SQL editor made in Reactjs where users can query easily on a table using SQL, and see the results.
## Tech Stack

The project is built on **Reactjs** with use of libraries such as **Material UI**, React Ace, ALASql, React Toaster etc.
It is deployed locally through **Nodejs**


## Demo

- https://atlan-sql-editor-ten.vercel.app/



# Features

- Users can get data of any of the predefined SQL queries either by using SQL Editor or Sidebar Menu.
- Users can sort data directly by clicking the Table Headers title.
- Users can navigate to different pages using pagination.
- Users can download the data in CSV and PDF Format by clicking the export option.
- Users can see query runtime in milliseconds(ms).
## Predefined SQL queries

- select * from customers
- select * from categories
- select * from employee_territories
- select * from order_details
- select * from orders
- select * from products
- select * from regions
- select * from shippers
- select * from suppliers
- select * from territories

# Screenshots
![image](https://user-images.githubusercontent.com/53695605/166706181-79210e50-6521-4db1-8a8e-1ed793ac7b65.png)
![image](https://user-images.githubusercontent.com/53695605/166706326-9ecbb269-e693-440b-9c51-ee43956d7874.png)


# Page Load Time

I calculated the page load time through the help of Chrome devtools - Lighthouse through which I was able to obtain the following results: 





![image](https://user-images.githubusercontent.com/53695605/166706980-2d24ee17-9dbe-4208-a5c4-167f43a9ebde.png)
![image](https://user-images.githubusercontent.com/53695605/166707046-95d9a039-b19e-4c72-8133-f6450e96bf12.png)


To optimize the page load time I took the suggestions provided by Lighthouse and worked upon resolving them. Apart from that I've divided the page into several components and used React.memo() in order to improve the rendering of the page


Finally the react app was hosted on Vercel which helped in compressing the js bundles and further improve the page load time
