"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.PostCard = void 0;
/* eslint-disable prettier/prettier */
var styled_components_1 = require("styled-components");
//import { getFontFamily } from '../../../services';
var ColorService_1 = require("../../../services/ColorService");
var DislikeButton_1 = require("../DislikeButton");
var FavoriteButton_1 = require("../FavoriteButton");
var LikeButton_1 = require("../LikeButton");
exports.PostCard = function (_a) {
    var date = _a.date, title = _a.title, id = _a.id, image = _a.image, onClick = _a.onClick;
    return (React.createElement(PostCardStyled, { key: id },
        React.createElement(PostImg, { onClick: onClick, src: image }),
        React.createElement(PostDate, null, date),
        React.createElement(PostTitle, { href: "/posts/" + ("" + id) },
            " ",
            title,
            " "),
        React.createElement(PostButtons, null,
            React.createElement("div", null,
                React.createElement(LikeButton_1.LikeButton, { onClick: function () { return console.log("like"); } }),
                React.createElement(DislikeButton_1.DislikeButton, { onClick: function () { return console.log("dislike"); } })),
            React.createElement(FavoriteButton_1.FavoriteButton, { onClick: function () { return console.log("favorite"); } }))));
};
var PostImg = styled_components_1["default"].img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 246px;\n  width: 300px;\n  cursor: pointer;\n"], ["\n  height: 246px;\n  width: 300px;\n  cursor: pointer;\n"])));
var PostCardStyled = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 290px;\n  padding: 20px;\n  margin: 5px 5px 10px 5px;\n  border-bottom: 1px solid ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 290px;\n  padding: 20px;\n  margin: 5px 5px 10px 5px;\n  border-bottom: 1px solid ", ";\n"])), ColorService_1.ColorService.MEDIUM);
var PostDate = styled_components_1["default"].p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-align: start;\n  font-weight: 400;\n  font-size: 16px;\n  color : ", ";\n  margin: 10px 0px;\n"], ["\n  text-align: start;\n  font-weight: 400;\n  font-size: 16px;\n  color : ", ";\n  margin: 10px 0px;\n"])), ColorService_1.ColorService.GRAY);
var PostTitle = styled_components_1["default"].a(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  text-align: start;\n  font-weight: 600;\n  font-size: 18px;\n  text-decoration: none;\n  margin-bottom: 10px;\n\n  :hover {\n    color:  ", ";\n  }\n"], ["\n  color: ", ";\n  text-align: start;\n  font-weight: 600;\n  font-size: 18px;\n  text-decoration: none;\n  margin-bottom: 10px;\n\n  :hover {\n    color:  ", ";\n  }\n"])), ColorService_1.ColorService.BLACK, ColorService_1.ColorService.PRIMARY);
var PostButtons = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  justify-content: space-between;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
