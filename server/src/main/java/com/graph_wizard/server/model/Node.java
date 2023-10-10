package com.graph_wizard.server.model;

import java.util.HashMap;
import java.util.Map;

public class Node {
    private String name;
    private Map<Node, Integer> neighbors;

    public Node(String name) {
        this.name = name;
        this.neighbors = new HashMap<>();
    }

    public void addNeighbor(Node neighbor, int weight) {
        this.neighbors.put(neighbor, weight);
    }

    public void addNeighbors(Map<Node, Integer> neighborMap) {
        this.neighbors.putAll(neighborMap);
    }

    public Map<Node, Integer> getNeighbors() {
        return this.neighbors;
    }

    public String getName() {
        return this.name;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder(name);
        sb.append(" -> [");
        boolean first = true;
        for (Map.Entry<Node, Integer> entry : neighbors.entrySet()) {
            if (!first) {
                sb.append(", ");
            }
            sb.append(entry.getKey().getName()).append(": ").append(entry.getValue());
            first = false;
        }
        sb.append("]");
        return sb.toString();
    }
    

    @Override
    public boolean equals(Object other) {
        if (other == null) return false;
        if (!(other instanceof Node)) return false;
        Node otherNode = (Node) other;
        return this.name.equals(otherNode.name);
    }

    @Override
    public int hashCode() {
        return this.name.hashCode();
    }
}
