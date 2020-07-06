package pl.szynow.workers.task;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import pl.szynow.workers.service.TokenService;

@Component
@Slf4j
public class TokenPurger {

    @Autowired
    private TokenService tokenService;

    @Scheduled( fixedDelayString = "${token.purge.time.milliseconds}")
    public void purgeTokens() {
        log.info("Purging tokens");
        tokenService.purge();
    }

}
