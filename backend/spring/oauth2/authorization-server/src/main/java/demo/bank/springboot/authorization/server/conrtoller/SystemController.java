package demo.bank.springboot.authorization.server.conrtoller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Rojar Smith
 *
 * @date 2023 Feb 12
 */
@RestController
public class SystemController {

    @GetMapping("/")
    public Map<String, Object> root() {
        Map<String, Object> reply = new HashMap<>();
        reply.put("msg", "root");
        return reply;
    }

    @GetMapping("/authorized")
//    @PreAuthorize("#oauth2.hasScope('message.read')")
    public Map<String, Object> authorized() {
        Map<String, Object> reply = new HashMap<>();
        reply.put("msg", "authorized");
        return reply;
    }

}
