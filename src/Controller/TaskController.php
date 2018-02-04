<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class TaskController
 *
 * @Route("/tasks")
 */
class TaskController extends Controller
{
	/**
	 * @Route("/", name="tasks")
     *
	 * @return Response
	 */
	public function index()
	{
		return $this->render('Task/index.html.twig');
	}
}