<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class DefaultController
 */
class DefaultController extends Controller
{
	/**
	 * @Route("/", name="home")
     *
	 * @return Response
	 */
	public function home()
	{
		return $this->render('Default/home.html.twig');
	}
}