package com.graph_wizard.server.service.algorithms;

import com.graph_wizard.server.model.Node;
import com.graph_wizard.server.model.Graph;
import com.graph_wizard.server.model.Path;
import com.graph_wizard.server.service.algorithms.exception.NegativeEdgeWeightException;
import com.graph_wizard.server.service.algorithms.exception.NegativeWeightCycleException;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;
import java.util.Set;
import java.util.Map.Entry;
import java.lang.reflect.Array;
import java.util.Comparator;

@Service
public class ShortestPath {

    public Path getFromBellmanFord(Graph graph, String startNodeName, String endNodeName) {
        Map<Node, Integer> distances = new HashMap<>();
        Map<Node, Node> predecessors = new HashMap<>();
    
        Node startNode = graph.getNode(startNodeName);
        if (startNode == null) return null;
    
        for (Node node : graph.getNodes()) {
            distances.put(node, Integer.MAX_VALUE);
        }
    
        distances.put(startNode, 0);
    
        int nodeCount = graph.getNodes().size();
        for (int i = 0; i < nodeCount - 1; i++) {
            for (Node node : graph.getNodes()) {
                for (Map.Entry<Node, Integer> entry : node.getNeighbors().entrySet()) {
                    Node neighbor = entry.getKey();
                    int weight = entry.getValue();
                    int distanceThroughNode = distances.get(node) == Integer.MAX_VALUE ? Integer.MAX_VALUE : distances.get(node) + weight;
    
                    if (distanceThroughNode < distances.get(neighbor)) {
                        distances.put(neighbor, distanceThroughNode);
                        predecessors.put(neighbor, node);
                    }
                }
            }
        }
    
        // Check for negative weight cycles
        for (Node node : graph.getNodes()) {
            for (Map.Entry<Node, Integer> entry : node.getNeighbors().entrySet()) {
                Node neighbor = entry.getKey();
                int weight = entry.getValue();
                if (distances.get(node) != Integer.MAX_VALUE && distances.get(node) + weight < distances.get(neighbor)) {
                    throw new NegativeWeightCycleException();
                }
            }
        }
    
        return buildPath(graph.getNode(endNodeName), predecessors);
    }

    public Path getFromDijkstra(Graph graph, String startNodeName, String endNodeName) {
        Map<Node, Integer> distances = new HashMap<>();
        Set<Node> visitedNodes = new HashSet<>();
        Map<Node, Node> previousNode = new HashMap<>();
        PriorityQueue<Node> priorityQueue = new PriorityQueue<>(Comparator.comparingInt(distances::get));

        Node startNode = graph.getNode(startNodeName);

        if (startNode == null) 
            return null;

        for(Node node : graph.getNodes()) {
            if(node.equals(startNode)) 
                distances.put(node, 0);
            else
                distances.put(node, Integer.MAX_VALUE);
            priorityQueue.add(node);
        }

        while(!priorityQueue.isEmpty()) {
            Node currNode = priorityQueue.poll();
            visitedNodes.add(currNode);

            for(Entry<Node, Integer> entry : currNode.getNeighbors().entrySet()) {
                Node neighbor = entry.getKey();

                if(visitedNodes.contains(neighbor))
                    continue;

                Integer neighborDistance = entry.getValue();
                if (neighborDistance < 0) {
                    throw new NegativeEdgeWeightException(
                        "Edge from node " 
                        + currNode.getName() + " to node " 
                        + neighbor.getName() + " has a negative weight of " 
                        + neighborDistance
                    );
                }
                
                int newDistance = distances.get(currNode) + neighborDistance;

                if(newDistance < distances.get(neighbor)) {    
                    priorityQueue.remove(neighbor);
                    distances.put(neighbor, newDistance);
                    previousNode.put(neighbor, currNode);
                    priorityQueue.add(neighbor);
                }
            }
        }

        Path path = buildPath(graph.getNode(endNodeName), previousNode);

        return path;
    }

    private Path buildPath(Node endNode, Map<Node, Node> previousNode) {
        Path path = new Path();
        Node currentNode = endNode;

        while (currentNode != null) {
            path.addNode(currentNode);
            currentNode = previousNode.get(currentNode);
        }

        return path;
    }
}
