package com.graph_wizard.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.graph_wizard.server.model.Edge;
import com.graph_wizard.server.model.Graph;
import com.graph_wizard.server.model.Path;
import com.graph_wizard.server.service.algorithms.ShortestPath;
import com.graph_wizard.server.service.graph.GraphBuilder;


@RestController
@RequestMapping(Endpoints.ALGORITHMS + Endpoints.GET_SHORTEST_PATH)
public class ShortestPathController {
    
    private final GraphBuilder graphBuilder;
    private final ShortestPath shortestPath;

    @Autowired
    public ShortestPathController(GraphBuilder graphBuilder, ShortestPath shortestPath) {
        this.graphBuilder = graphBuilder;
        this.shortestPath = shortestPath;
    }

    @PostMapping(Endpoints.DIJKSTRA)
    public Path getShortestPathFromDijkstra(
        @RequestBody List<Edge> edges,
        @RequestParam String startNode,
        @RequestParam String endNode
    ) {        
        Graph graph = this.graphBuilder.fromEdges(edges);

        return this.shortestPath.getFromDijkstra(graph, startNode, endNode);
    }

    @PostMapping(Endpoints.BELLMAN_FORD)
    public Path getShortestPathFromBellmanFord(
        @RequestBody List<Edge> edges,
        @RequestParam String startNode,
        @RequestParam String endNode
    ) {
        Graph graph = this.graphBuilder.fromEdges(edges);

        return this.shortestPath.getFromBellmanFord(graph, startNode, endNode);
    }
}
