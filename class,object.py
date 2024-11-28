class Employee:
    def __init__(self):
        self.empId=""
        self.age=""
        self.location=""
    def display(self):
        print("empId:",self.empId)
        print("age:",self.age)
        print("location:",self.location)

Abi=Employee()
Dinesh=Employee()
Anitha=Employee()

Abi.empId="101"
Abi.age="23"
Abi.location="Salem"

Anitha.empId="103"
Anitha.age="40"
Anitha.location="Coimbatore"

Abi.display()
Anitha.display()
