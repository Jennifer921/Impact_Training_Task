class Company():
    def __init__(self):
        self.__companyName="Aditya Birla" #private variable
    def toAccessCompany(self):
        print(self.__companyName)
companies=Company()
companies.toAccessCompany()

