package com.my.xon.controller;

import com.my.xon.Result.Result;
import com.my.xon.pojo.User;
import com.my.xon.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.HtmlUtils;

import java.util.Objects;
import javax.servlet.http.HttpSession;

@Controller
public class LoginController {
    private UserService userService;
    @Autowired
    public LoginController(UserService userService) {
        this.userService = userService;
    }

    // 解决CORS跨域（因为浏览器会限制从脚本内发起的跨源HTTP请求）
    @CrossOrigin
    // 用于处理请求方法为POST的类型
    @PostMapping(value = "api/login")
    // 将java对象转为json格式的数据
    @ResponseBody
    public Result login(@RequestBody User requestUser, HttpSession session) {
        // 对 html 标签进行转义，防止 XSS 攻击
        String username = requestUser.getUsername();
        username = HtmlUtils.htmlEscape(username);

        User user = userService.get(username, requestUser.getPassword());
        if (null == user) {
            return new Result(400);
        } else {
            session.setAttribute("user", user);
            return new Result(200);
        }
    }
}
