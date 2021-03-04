package HTTPCall;



import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import HTTPCall.HTTPCall_Model;

@RestController
public class HTTPCall_Controller {

	@GetMapping("/movies")
	public Movie[] getAllMaps() {
      String url = "https://my.api.mockaroo.com/movie.json?key=bb299fd0";

      RestTemplate restTemplate = new RestTemplate();

      Movie[] response  = null;

      response = restTemplate.getForObject(url, Movie[].class);
      
      System.out.println(response);
      
      return response;
	}
	
}

