"use strict";
/* eslint-disable prettier/prettier */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Post = void 0;
var styled_components_1 = require("styled-components");
var examples_1 = require("../../examples");
var FavoriteButtonWithIcon_1 = require("../../examples/FavoriteButtonWithIcon");
exports.Post = function (_a) {
    var title = _a.title, image = _a.image, text = _a.text;
    return (React.createElement(React.Fragment, null,
        React.createElement(examples_1.CustomTitle, { text: title }),
        React.createElement(PostImage, { src: image }),
        React.createElement(PostText, null,
            text,
            " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"),
        React.createElement(PostButtons, null,
            React.createElement("div", null,
                React.createElement(examples_1.LikeButton, { onClick: function () { return console.log("LikePost"); } }),
                React.createElement(examples_1.DislikeButton, { onClick: function () { return console.log("DislikePost"); } })),
            React.createElement(FavoriteButtonWithIcon_1.FavoriteButtonWithIcon, { onClick: function () { return console.log("Add to favorites"); } }))));
};
var PostImage = styled_components_1["default"].img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 48px;\n  width: 80%;\n"], ["\n  margin-top: 48px;\n  width: 80%;\n"])));
var PostText = styled_components_1["default"].p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 48px 0px;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 32px;\n  width: 920px;\n  text-align: justify;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n"], ["\n  margin: 48px 0px;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 32px;\n  width: 920px;\n  text-align: justify;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n"])));
var PostButtons = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  align-items: center;\n  width: 920px;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  justify-content: space-between;\n"], ["\n  align-items: center;\n  width: 920px;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  justify-content: space-between;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
