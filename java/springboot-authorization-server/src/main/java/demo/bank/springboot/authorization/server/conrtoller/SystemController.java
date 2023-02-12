package demo.bank.springboot.authorization.server.conrtoller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

/**
 * @author Rojar Smith
 *
 * @date 2023 Feb 12
 */
@RestController
public class SystemController {

    @GetMapping("/")
    @PreAuthorize("#oauth2.hasScope('message.read')")
    public Map<String, Object> status() {
        Map<String, Object> reply = new HashMap<>();
        reply.put("msg", "ok");
        return reply;
    }

    @GetMapping("/authorized")
    public Map<String, Object> authorized() {
        Map<String, Object> reply = new HashMap<>();
        reply.put("msg", "authorized");
        return reply;
    }

}
