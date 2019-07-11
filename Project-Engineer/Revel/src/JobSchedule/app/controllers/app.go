package controllers

import (
	"JobSchedule/app/models"
	"github.com/revel/revel"
	"fmt"

)

type App struct {
	ModelController
}

func (c App) Index() revel.Result {
	return c.Render()
}

func (c App) AllUsers() revel.Result{
	var users []models.User
	c.Orm.Find(&users)
	for i,_ := range users {
		c.Orm.Model(users[i]).Related(&users[i].Career)
		c.Orm.Model(users[i]).Related(&users[i].Province)
		c.Orm.Model(users[i]).Related(&users[i].Gender)
	}

	return c.RenderJSON(users)
}

func (c App) NewUser(FirstName string , LastName  string , Username  string ,
											Password  string , Birthday  string , Address   string ,
											GenderID int,	CareerID int,	ProvinceID int,
										) revel.Result {
	newuser := models.User{FirstName:FirstName , LastName:LastName , Username:Username ,
													Password:Password , Birthday:Birthday , Address:Address ,
													CareerID:CareerID ,GenderID:GenderID,ProvinceID:ProvinceID,
													}
	c.Orm.Create(&newuser);
	return c.RenderJSON(newuser)
}

func (c App) UserId(id int) revel.Result{

	var users models.User
	user := c.Orm.First(&users,id)
	if user.Error != nil{
		 panic(user.Error)
	}
	return c.RenderJSON(users)
}

func (c App) GenderId(id int) revel.Result{
	var genders models.Gender
	gender := c.Orm.First(&genders,id)

	if gender.Error != nil{
		 panic(gender.Error)
	}
	fmt.Println(gender)
	return c.RenderJSON(genders)
}

func (c App) AllGenders() revel.Result{
	var genders []models.Gender
	allgenders := c.Orm.Find(&genders)

	if allgenders.Error != nil{
		 panic(allgenders.Error)
	}
	fmt.Println(genders)

	return c.RenderJSON(genders)
}

func (c App) AllCareers() revel.Result{
	var careers []models.Career
	allcareers := c.Orm.Find(&careers)

	if allcareers.Error != nil{
		 panic(allcareers.Error)
	}

	return c.RenderJSON(careers)
}

func (c App) AllProvinces() revel.Result{
	var provinces []models.Province
	allprovinces := c.Orm.Find(&provinces)

	if allprovinces.Error != nil{
		 panic(allprovinces.Error)
	}

	return c.RenderJSON(provinces)
}

func (c App) NewGender(Gender string ) revel.Result {
	newgender := models.Gender{Gender:Gender}
	c.Orm.Create(&newgender);
	return c.RenderJSON(newgender)
}

func (c App) NewCareer(Career string ) revel.Result {
	newcareer := models.Career{Career:Career}
	c.Orm.Create(&newcareer);
	return c.RenderJSON(newcareer)
}

func (c App) NewProvince(Province string ) revel.Result {
	newprovince := models.Province{Province:Province}
	c.Orm.Create(&newprovince);
	return c.RenderJSON(newprovince)
}

func (c App) TestAss() revel.Result{
	// var user models.User
	// c.Orm.Model(&user)
	// return c.RenderJSON(user)
	var career models.Career
	c.Orm.First(&career,1)
	var gender models.Gender
	c.Orm.First(&gender,1)
	var province models.Province
	c.Orm.First(&province,1)



	user := models.User{
		FirstName:"FirstName",
		LastName:"LastName",
		Username:"Username",
		Password:"Password",
		Birthday:"Birthday",
		Address:"Address",
		CareerID:1,
		GenderID:1,
		ProvinceID:1,
		Career:career,
		Gender:gender,
		Province:province,
	}
	c.Orm.Create(&user);

	return c.RenderJSON(user)

}
