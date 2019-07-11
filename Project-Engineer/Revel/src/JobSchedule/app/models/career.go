package models
import(
    "github.com/jinzhu/gorm"
)

type Career struct {
  gorm.Model
  Career    string
}
