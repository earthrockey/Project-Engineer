package models
import(
    "github.com/jinzhu/gorm"

)

type User struct {
  gorm.Model
  FirstName   string
  LastName    string
  Username    string
  Password    string
  Birthday    string
  Address     string
  CareerID    int
  GenderID    int
  ProvinceID  int
  Career      Career
  Gender      Gender
  Province    Province
}
