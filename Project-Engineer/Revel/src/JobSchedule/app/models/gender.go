package models
import(
    "github.com/jinzhu/gorm"
)

type Gender struct {
  gorm.Model
  Gender    string
}
