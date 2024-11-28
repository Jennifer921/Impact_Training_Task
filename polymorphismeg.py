class Employee ():
    def __init__(self,name,salary):
        self.name=name
        self.salary=salary
class Manager (Employee):
    def __init__ (self,name,salary,department):
        super().__init__(name,salary)
        self.department=department
    def display(self):
        print(self.name,self.salary,self.department)

managerDetails=Manager("Vinothini",50000,"Sales") 
managerDetails.display()
