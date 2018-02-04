<?php

namespace App\Controller\Api;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class BaseController
 */
class BaseController extends Controller
{
    /**
     * @param array $data
     * @param int $statusCode
     * @param array $headers
     *
     * @return JsonResponse
     */
    public function renderJson($data = null, int $statusCode = 200, array $headers = array()): JsonResponse
    {
        $serializer = $this->get('jms_serializer');

        $data = array(
            'status' => $statusCode,
            'data' => $data,
        );

        $data = $serializer->serialize($data, 'json');

        return new JsonResponse($data, $statusCode, $headers, true);
    }
}