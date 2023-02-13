<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GameResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'maxPlayers' => $this->maxPlayers,
            'minPlayers' => $this->minPlayers,
            'desc' => $this->desc,
            'rules' => $this->name,
            'difficulty' => $this->maxPlayers,
            'category' => $this->minPlayers,
            'picture' => $this->desc,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
