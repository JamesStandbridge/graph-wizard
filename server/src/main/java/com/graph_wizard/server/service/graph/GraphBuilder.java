package com.graph_wizard.server.service.graph;

import java.util.List;

import com.graph_wizard.server.model.Edge;
import com.graph_wizard.server.model.Graph;
import com.graph_wizard.server.model.Node;

import org.springframework.stereotype.Service;

@Service
public class GraphBuilder {
    

    public Graph fromEdges(List<Edge> edges) {
        Graph graph = new Graph();

        for (Edge edge : edges) {
            Node source = graph.getNode(edge.getSource());
            Node target = graph.getNode(edge.getTarget());

            if(source == null) {
                source = new Node(edge.getSource());
                graph.addNode(source);
            }

            if(target == null) {
                target = new Node(edge.getTarget());
                graph.addNode(target);
            }

            source.addNeighbor(target, edge.getWeight());

            if(!edge.isOriented())
                target.addNeighbor(source, edge.getWeight());

        }

        return graph;
    }
    
}
