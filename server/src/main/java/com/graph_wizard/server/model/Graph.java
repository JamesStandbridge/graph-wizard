package com.graph_wizard.server.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Graph {
    public Map<String, Node> nodes;

    public Graph() {
        this.nodes = new HashMap<>();
    }

    public void addNode(Node node) {
        this.nodes.put(node.getName(), node);
    }

    public void addNodes(List<Node> nodes) {
        for (Node node : nodes) {
            this.addNode(node);
        }
    }

    public Node getNode(String name) {
        return this.nodes.get(name);
    }

    public List<Node> getNodes() {
        return new ArrayList<>(this.nodes.values());
    }

    public String toString() {
        return this.nodes.toString();
    }

    public boolean equals(Object other) {
        if (other == null) return false;
        if (!(other instanceof Graph)) return false;
        Graph otherGraph = (Graph) other;
        return this.nodes.equals(otherGraph.nodes);
    }

    public int hashCode() {
        return this.nodes.hashCode();
    }
}
