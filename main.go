package main

import (
	"github.com/labstack/echo/v4"
	"github.com/sirupsen/logrus"
)

func main() {
	e := echo.New()
	e.Static("/", "public")
	if err := e.Start(":8080"); err != nil {
		logrus.Fatal(err)
	}
}
