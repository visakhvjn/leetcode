-- select max(Salary) Salary from Employee;

select ifnull((select Salary from Employee
where Salary < (select max(Salary) Salary from Employee) 
order by Salary Desc limit 1), null) as SecondHighestSalary;