<?php

namespace App\Controller\Api;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class TaskController
 *
 * @Route("/api/v1/tasks")
 */
class TaskController extends BaseController
{
    /**
     * @Route("", name="api_tasks_list", methods={"GET"})
     * @Route("/")
     *
     * @return JsonResponse
     */
    public function listAction()
    {
        return $this->renderJson();
    }

    /**
     * @Route("/{id}", name="api_tasks_get", methods={"GET"})
     *
     * @return JsonResponse
     */
    public function getAction(int $id)
    {
        return $this->renderJson();
    }

    /**
     * @Route("", name="api_tasks_new", methods={"POST"})
     *
     * @param Request $request
     */
    public function newAction(Request $request)
    {
        return $this->renderJson();
    }
}