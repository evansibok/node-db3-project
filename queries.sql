-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select
    productname,
    categoryname
from product as p
left join category as c
on p.categoryid = c.id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select 
    o.id as order_id,
    companyname as company_name,
    o.orderdate as order_date
from [order] as o
left join shipper as s
on o.shipvia = s.id
where o.orderdate < "2012-08-09"
order by o.orderdate desc;

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select
    p.productname as product_name,
    o.quantity as product_quantity_ordered
from product as p
join orderdetail as o
on p.id = o.productid
where o.orderid is 10251
group by product_name;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select
    o.id as order_id,
    c.companyname as customer_company_name,
    e.lastname as employee_lastname
from [order] as o
join customer as c
on o.customerid = c.id
join employee as e
on o.employeeid = e.id;